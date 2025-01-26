import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogContent,
  DialogActions
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { UpdateItemProps, UpdatesFactory } from '../models/updates';

interface AddUpdateProps {
  onClose: (value: UpdateItemProps | undefined) => void;
  open: boolean;
}

const AddUpdate: React.FC<AddUpdateProps> = ({ onClose, open }) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [headingError, setHeadingError] = useState('');
  const [touched, setTouched] = useState(false);

  const headingRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      // Reset state when the dialog is opened
      setHeading('');
      setContent('');
      setHeadingError('');
      setTouched(false);
    }

    // Focus the heading input field after a short delay
    setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.focus();
      }
    }, 100);
  }, [open]);

  useEffect(() => {
    if (touched && !heading) {
      setHeadingError('Heading is required');
    } else {
      setHeadingError('');
    }
  }, [touched, heading]);

  const handleClose = () => {
    onClose(undefined);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!heading) {
      setTouched(true);
      setHeadingError('Heading is required');
      return;
    }
    const update: UpdateItemProps = UpdatesFactory.createUpdateItem('PPO', heading, content);
    onClose(update);
  };

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleHeadingChange', e.target.value);
    setTouched(true);
    setHeading(e.target.value);
    if (touched && !e.target.value) {
      setHeadingError('Heading is required');
    } else {
      setHeadingError('');
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          handleSubmit(event);
        }
      }}>
      <DialogTitle>Add New Update</DialogTitle>
      <DialogContent sx={{ paddingTop: '1rem !important' }}>
        <TextField
          inputRef={headingRef}
          id="heading"
          label="Heading"
          type="text"
          fullWidth
          variant="outlined"
          value={heading}
          onChange={handleHeadingChange}
          onBlur={() => setTouched(true)}
          error={!!headingError}
          helperText={headingError}
          sx={{ mb: 2 }}
        />
        <TextField
          id="content"
          label="Content"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ mb: 2 }}
        />
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" color="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUpdate;
