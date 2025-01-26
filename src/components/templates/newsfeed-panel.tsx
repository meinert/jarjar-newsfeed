import React from 'react';
import Button from '@mui/material/Button';
import { UpdateItem } from '../../models/updateAndComment';
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

    console.log('NewsfeedPanelProps - new update added', value);

    onAddUpdate(value);
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="title">
          <span> {title} - NewsfeedPanel</span> <br />
          <span>By Peter Fjordbak Poulsen</span>
        </div>
        <Button variant="contained" onClick={handleClickOpen}>
          Add update
        </Button>
      </div>

      <AddUpdateDialog open={open} onClose={handleClose} title="Add new update" />
    </React.Fragment>
  );
};

export default NewsfeedPanel;
