import React, { JSX } from 'react';
import { CommentItem, UpdateItem } from '../../models/updates';
import ViewComments from './view-comments';
import CardItem from '../molecules/card-item';
import { UpdateType } from '../../models/enums';

interface CardUpdateProps {
  onUpdateItemChange: (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem | number
  ) => void;
  updateItem: UpdateItem;
}

const CardUpdate: React.FC<CardUpdateProps> = ({ updateItem, onUpdateItemChange }): JSX.Element => {
  const onCommentUpdate = (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem | number
  ) => {
    console.log('onCommentUpdate', key, updateType, update);

    // If the updateType is COMMENT, then the key is the id of the updateItem the comment is associated with
    if (updateType === UpdateType.COMMENT) {
      const updateItemKey = updateItem.id;
      updateItem.comments.push(update as CommentItem); // TODO: Works for this demo, but should be handled differently in a real app
      return onUpdateItemChange(updateItemKey, updateType, update);
    }

    if (updateType === UpdateType.RATING) {
      // Update the rating of the comment
      const commentKey = key as string;
      const rating = update as number;
      const commentToUpdate = updateItem.comments.find((comment) => comment.id === commentKey);
      if (commentToUpdate) {
        console.log('Handle persisting the comment rating', commentToUpdate, rating);
      }
    }
  };

  const updateCardActions = (
    <ViewComments comments={updateItem.comments} onCommentCardUpdate={onCommentUpdate} />
  );

  return (
    <CardItem
      by={updateItem.by}
      heading={updateItem.heading}
      text={updateItem.text}
      imageSrc={updateItem.imageSrc}
      created={updateItem.created}
      actions={updateCardActions}
    />
  );
};

export default CardUpdate;
