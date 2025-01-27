import React, { JSX } from 'react';
import { CommentItem, Item, UpdateItem } from '../../models/updateAndComment';
import ViewComments from './view-comments';
import CardItem from '../molecules/card-item';
import { UpdateType } from '../../models/enums';

interface CardUpdateProps {
  onUpdateItemChange: (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem
  ) => void;
  updateItem: UpdateItem;
}

const CardUpdate: React.FC<CardUpdateProps> = ({ updateItem, onUpdateItemChange }): JSX.Element => {
  const onCommentCardUpdate = (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem
  ) => {
    console.log('onCommentUpdate', key, updateType, update);

    // If the updateType is COMMENT, then the key is the id of the updateItem the comment is associated with
    if (updateType === UpdateType.COMMENT) {
      const updateItemKey = updateItem.id;
      return onUpdateItemChange(updateItemKey, updateType, update);
    }

    if (updateType === UpdateType.RATING) {
      return onUpdateItemChange(key, updateType, update);
    }
  };

  const onUpdateRating = (key: string, update: Item) => {
    return onUpdateItemChange(key, UpdateType.RATING, update);
  };

  const updateCardActions = (
    <ViewComments comments={updateItem.comments} onCommentCardUpdate={onCommentCardUpdate} />
  );

  return (
    <CardItem
      onRating={onUpdateRating}
      item={updateItem}
      heading={updateItem.heading}
      actions={updateCardActions}
    />
  );
};

export default CardUpdate;
