import React from 'react';
import CardUpdate from '../organisms/card-update';
import { CommentItem, UpdateItem } from '../../models/updates';
import { UpdateType } from '../../models/enums';

interface ViewUpdatesProps {
  updates: UpdateItem[];
  onUpdatesChange: (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem | number
  ) => void;
}

const ViewUpdates: React.FC<ViewUpdatesProps> = ({ updates, onUpdatesChange }) => {
  console.log('ViewUpdates - App props:', updates);

  return (
    <div>
      {updates.map((update, key) => (
        <CardUpdate key={key} updateItem={update} onUpdateItemChange={onUpdatesChange} />
      ))}
    </div>
  );
};

export default ViewUpdates;
