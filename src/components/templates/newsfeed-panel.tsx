import React from 'react';
import Button from '@mui/material/Button';
import { UpdateItem } from '../../models/updates';
import AddUpdateDialog from '../molecules/add-update-dialog';

// import ViewUpdate from './view-update'
// import AddUpdate from './add-update'

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

    onAddUpdate(value);
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{title} - NewsfeedPanel</h1>
        <Button variant="contained" onClick={handleClickOpen}>
          Add update
        </Button>
      </div>

      <AddUpdateDialog open={open} onClose={handleClose} title="Add new update" />
    </React.Fragment>
  );
};

export default NewsfeedPanel;
