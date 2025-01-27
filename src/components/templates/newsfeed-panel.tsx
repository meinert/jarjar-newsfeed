import React from 'react';
import Button from '@mui/material/Button';
import { UpdateItem } from '../../models/updateAndComment';
import AddUpdateDialog from '../molecules/add-update-dialog';
import ChangeUserComponent from '../atomic/change-user';
import Grid from '@mui/material/Grid2';

/**
 * Props for the NewsfeedPanel component.
 *
 * @interface NewsfeedPanelProps
 * @property {function} onAddUpdate - Callback function to handle the addition of a new update.
 * @property {string} title - The title of the newsfeed panel.
 */

/**
 * NewsfeedPanel component.
 *
 * This component renders a panel with a title and a button to add a new update.
 * When the button is clicked, a dialog is opened to add a new update.
 *
 * @component
 * @param {NewsfeedPanelProps} props - The props for the component.
 * @returns {React.FC<NewsfeedPanelProps>} The NewsfeedPanel component.
 */
interface NewsfeedPanelProps {
  onAddUpdate: (update: UpdateItem) => void;
  title: string;
}

const NewsfeedPanel: React.FC<NewsfeedPanelProps> = ({ onAddUpdate, title }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: UpdateItem | undefined) => {
    setOpen(false);
    if (value === undefined) {
      console.log('Dialog close without adding update');
      return;
    }

    console.log('NewsfeedPanelProps - new update added', value);

    onAddUpdate(value);
  };

  return (
    <Grid container spacing={1}>
      <Grid size={{ sm: 12, xl: 8 }}>
        <div className="title">
          <span> {title} - Newsfeed Panel</span> <br />
          <span>By Peter Fjordbak Poulsen</span>
        </div>
      </Grid>
      <Grid size={{ sm: 12, xl: 4 }}>
        <div className="toolbar">
          <Button sx={{ minWidth: '120px' }} variant="contained" onClick={handleClickOpen}>
            Add update
          </Button>
          <ChangeUserComponent></ChangeUserComponent>
        </div>
      </Grid>
      <AddUpdateDialog open={open} onClose={handleClose} title="Add new update" />
    </Grid>
  );
};

export default NewsfeedPanel;
