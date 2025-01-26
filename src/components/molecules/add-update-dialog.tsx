import { Dialog, DialogTitle, Button, DialogContent, DialogActions } from '@mui/material';
import React, { useState } from 'react';
import { UpdateItem, UpdatesFactory } from '../../models/updateAndComment';
import FormInput from '../atomic/form-input';

interface AddUpdateDialogProps {
  onClose: (value: UpdateItem | undefined) => void;
  open: boolean;
  title: string;
}

const AddUpdateDialog: React.FC<AddUpdateDialogProps> = ({ onClose, open, title }) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => {
    onClose(undefined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const update: UpdateItem = UpdatesFactory.createUpdateItem('PPO', heading, content); // TODO: CHange the user of the update
    console.log('handleSubmit', update);
    onClose(update);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            paddingTop: '1rem !important'
          }}>
          <FormInput
            onChange={setHeading}
            id="heading"
            title="Add Heading"
            required={true}
            error={'An update must have a heading'}
            focus={true}
          />
          <FormInput
            onChange={setContent}
            id="content"
            title="Write your exciting content here"
            required={false}
            multiline={true}
          />
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Button variant="outlined" color="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" disabled={heading.length === 0}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddUpdateDialog;
