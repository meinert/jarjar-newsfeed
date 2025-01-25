import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { UpdateItemProps, UpdatesFactory } from '../models/updates';
import AddUpdate from './add-update';

// import ViewUpdate from './view-update'
// import AddUpdate from './add-update'

interface NewsfeedPanelProps {
    onAddUpdate: (update: UpdateItemProps) => void,
    title: string
}

const NewsfeedPanel: React.FC<NewsfeedPanelProps> = ({ onAddUpdate, title }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: UpdateItemProps | undefined) => {
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
    
      <AddUpdate open={open} onClose={handleClose} />
    </React.Fragment>
  );
}

export default NewsfeedPanel