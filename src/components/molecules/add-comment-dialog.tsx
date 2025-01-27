import { Dialog, DialogTitle, Button, DialogContent, DialogActions } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CommentItem, UpdatesFactory } from '../../models/updateAndComment';
import FormInput from '../atomic/form-input';
import { AppContext } from '../../context/AppContext';

// TODO: Make a reusable component for dialogs with forms, overlaps with AddUpdateDialog
interface AddCommentDialogProps {
  onClose: (value: CommentItem | undefined) => void;
  open: boolean;
  title: string;
}

const AddCommentDialog: React.FC<AddCommentDialogProps> = ({ onClose, open, title }) => {
  const { user } = useContext(AppContext);
  const [comment, setComment] = useState('');

  const handleClose = () => {
    onClose(undefined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', comment);
    onClose(UpdatesFactory.createCommentItem(user, comment));
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            paddingTop: '1rem !important'
          }}>
          <FormInput
            onChange={setComment}
            id="comment"
            title="Here write your comment you must"
            required={true}
            multiline={true}
            focus={true}
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
          <Button type="submit" variant="contained" color="primary" disabled={comment.length === 0}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddCommentDialog;
