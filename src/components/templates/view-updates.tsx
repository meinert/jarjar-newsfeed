// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { ViewCommentsMemo } from '../organisms/view-comments';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { CardItemMemo } from '../molecules/card-item';
import React, { useCallback, useContext, useState } from 'react';
import { CardUpdateMemo } from '../organisms/card-update';
import { Item, UpdateItem } from '../../models/updateAndComment';
import { UpdateType } from '../../models/enums';
import Grid from '@mui/material/Grid2';
import { Checkbox } from '@mui/material';
import { AppContext } from '../../context/AppContext';

/**
 * Props for the ViewUpdates component.
 *
 * @interface ViewUpdatesProps
 * @property {UpdateItem[]} updates - An array of update items to be displayed.
 * @property {(key: string | undefined, updateType: UpdateType, update: Item) => void} onUpdatesChange - Callback function to handle updates change.
 * The key is the key of the update item to be updated, the updateType is the type of the update and update contains the item to be updated (either a comment or an update).
 */

/**
 * ViewUpdates component.
 *
 * This component renders a card for each update using the @see CardUpdateMemo component within a responsive grid layout.
 * Each card contain a component that allows the user to see the comments on the update and add comments. @see ViewCommentsMemo
 * Furthermore the user can rank the update with 1-5 stars. @see CardItemMemo
 *
 * @component
 * @param {ViewUpdatesProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
interface ViewUpdatesProps {
  updates: UpdateItem[];
  onUpdatesChange: (key: string | undefined, updateType: UpdateType, update: Item) => void;
}

const ViewUpdates: React.FC<ViewUpdatesProps> = ({ updates, onUpdatesChange }) => {
  const [shownUpdates, setShownUpdates] = useState<UpdateItem[]>(updates);
  const [filterUpdates, setFilterUpdates] = useState<boolean>(false);
  const { user } = useContext(AppContext);

  const handleFilterUpdates = useCallback(
    (event, checked) => {
      setFilterUpdates(checked);
      if (checked) {
        const filteredUpdates = updates.filter((update) => update.user.id === user.id);
        setShownUpdates(filteredUpdates);
      } else {
        setShownUpdates(updates);
      }
    },
    [updates, user.id]
  );

  React.useEffect(() => {
    if (filterUpdates) {
      setShownUpdates(updates.filter((update) => update.user.id === user.id));
    }
  }, [filterUpdates, updates, user]);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <React.Fragment>
      <div style={{ color: 'white' }}>
        <Checkbox
          {...label}
          checked={filterUpdates}
          onChange={handleFilterUpdates}
          style={{ color: 'white' }}
        />
        Only show updates from selected user
      </div>
      <Grid container spacing={1}>
        {filterUpdates && shownUpdates.length === 0 && (
          <div style={{ color: 'white', fontSize: '3rem' }}>No updates for selected user</div>
        )}
        {shownUpdates.map((update, key) => (
          <Grid key={key} size={{ xs: 12, md: 6 }}>
            <CardUpdateMemo key={key} updateItem={update} onUpdateItemChange={onUpdatesChange} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export const ViewUpdatesMemo = React.memo(ViewUpdates);
