import React from 'react';
import CardUpdate from '../organisms/card-update';
import { Item, UpdateItem } from '../../models/updateAndComment';
import { UpdateType } from '../../models/enums';

interface ViewUpdatesProps {
  updates: UpdateItem[];
  onUpdatesChange: (key: string | undefined, updateType: UpdateType, update: Item) => void;
}

const ViewUpdates: React.FC<ViewUpdatesProps> = ({ updates, onUpdatesChange }) => {
  return (
    <div>
      {updates.map((update, key) => (
        <CardUpdate key={key} updateItem={update} onUpdateItemChange={onUpdatesChange} />
      ))}
    </div>
  );
};

export default ViewUpdates;
