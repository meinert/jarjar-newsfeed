import React from 'react';
import './App.scss';
import data from './data';

import ViewUpdates from './components/templates/view-updates';
import { CommentItem, UpdateItem } from './models/updates';
import NewsfeedPanel from './components/templates/newsfeed-panel';

import { SortOrder, SortKey, UpdateType } from './models/enums';
import { sortUtil } from './utils/sortOrderUtil';

interface AppProps {
  updates: UpdateItem[];
  sortOrder: SortOrder;
  sortKey: SortKey;
}

class App extends React.Component {
  defaultSortOrder = SortOrder.DSC;
  defaultSortKey = SortKey.CREATED;

  state: AppProps = {
    updates: data.updates.sort((a, b) =>
      sortUtil(a, b, this.defaultSortKey, this.defaultSortOrder)
    ),
    sortOrder: this.defaultSortOrder,
    sortKey: this.defaultSortKey
  };

  handleAddUpdate = (update: UpdateItem) => {
    this.setState((state: AppProps) => {
      const updates: UpdateItem[] = [...state.updates, update];

      console.log('Add an update to updates', update, updates);
      return { updates };
    });

    this.handleSortUpdates();
  };

  handleSortUpdates = () => {
    this.setState((state: AppProps) => {
      const updates: UpdateItem[] = state.updates.sort((a, b) =>
        sortUtil(a, b, state.sortKey, state.sortOrder)
      );

      console.log('Sort updates', updates);
      return { updates };
    });
  };

  onUpdatesChange = (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem | number
  ) => {
    console.log('App - onUpdatesChange', key, updateType, update);
  };

  render() {
    const updates = this.state.updates;

    return (
      <React.Fragment>
        <div className="content">
          <NewsfeedPanel title="Jar Jar PPO" onAddUpdate={this.handleAddUpdate} />
          <ViewUpdates onUpdatesChange={this.onUpdatesChange} updates={updates}></ViewUpdates>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
