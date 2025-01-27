import React from 'react';
import CardUpdate from '../organisms/card-update';
import { Item, UpdateItem } from '../../models/updateAndComment';
import { UpdateType } from '../../models/enums';
import Grid from '@mui/material/Grid2';

interface ViewUpdatesProps {
  updates: UpdateItem[];
  onUpdatesChange: (key: string | undefined, updateType: UpdateType, update: Item) => void;
}

const ViewUpdates: React.FC<ViewUpdatesProps> = ({ updates, onUpdatesChange }) => {
  return (
    <Grid container spacing={1}>
      {updates.map((update, key) => (
        <Grid key={key} size={{ xs: 12, md: 6 }}>
          <CardUpdate key={key} updateItem={update} onUpdateItemChange={onUpdatesChange} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewUpdates;
