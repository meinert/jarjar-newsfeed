import React, { useState, useCallback } from 'react';
import './App.scss';
import data from './data';

import ViewUpdates from './components/templates/view-updates';
import { CommentItem, Item, UpdateItem } from './models/updateAndComment';
import NewsfeedPanel from './components/templates/newsfeed-panel';

import { SortOrder, SortKey, UpdateType } from './models/enums';
import { sortUtil } from './utils/sortOrderUtil';

const App: React.FC = () => {
  const defaultSortOrder = SortOrder.DSC;
  const defaultSortKey = SortKey.CREATED;

  const [updates, setUpdates] = useState<UpdateItem[]>(() => {
    return data.updates.sort((a, b) => sortUtil(a, b, defaultSortKey, defaultSortOrder));
  });
  const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder);
  const [sortKey, setSortKey] = useState<SortKey>(defaultSortKey);

  const handleSortUpdates = useCallback(() => {
    setUpdates((prevUpdates) => prevUpdates.sort((a, b) => sortUtil(a, b, sortKey, sortOrder)));
  }, [sortKey, sortOrder]);

  const onUpdatesChange = (key: string | undefined, updateType: UpdateType, update: Item) => {
    if (updateType === UpdateType.COMMENT) {
      addComment(key as string, update);
    }

    if (updateType === UpdateType.RATING) {
      addReview(key as string, update);
    }
  };

  const findCommentItem = (key: string) => {
    const commentToUpdate = updates.find((u) => u.comments.some((c) => c.id === key));
    if (commentToUpdate) {
      return commentToUpdate.comments.find((c) => c.id === key);
    }
  };

  const handleAddUpdate = (update: UpdateItem) => {
    console.log('App - handleAddUpdate', update);
    setUpdates((prevUpdates) => {
      const newUpdates = [update, ...prevUpdates];
      return newUpdates;
    });

    handleSortUpdates();
  };

  function addComment(key: string, update: Item) {
    const itemToUpdate = updates.find((u) => u.id === key);

    if (itemToUpdate) {
      itemToUpdate.comments.push(update as CommentItem);
    }
  }

  function addReview(key: string, update: Item) {
    let itemToUpdate: Item | undefined = updates.find((u) => u.id === key);

    if (!itemToUpdate) {
      itemToUpdate = findCommentItem(key as string);
    }

    if (!itemToUpdate) {
      return console.error('Item not found', key);
    }

    itemToUpdate.rating = update.rating;
    itemToUpdate.numberOfVotes = update.numberOfVotes;
  }

  return (
    <React.Fragment>
      <div className="content">
        <NewsfeedPanel title="Jar Jar" onAddUpdate={handleAddUpdate} />
        <ViewUpdates onUpdatesChange={onUpdatesChange} updates={updates}></ViewUpdates>
      </div>
    </React.Fragment>
  );
};

export default App;
