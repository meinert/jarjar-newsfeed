import React from 'react';
import { CommentItem } from '../../models/updates';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button
} from '@mui/material';
import AddCommentDialog from '../molecules/add-comment-dialog';
import CommentItemCard from './card-comment';
import { UpdateType } from '../../models/enums';

interface ViewCommentsProps {
  onCommentCardUpdate: (
    key: string | undefined,
    updateType: UpdateType,
    update: CommentItem | number
  ) => void;
  comments: CommentItem[];
}

const ViewComments: React.FC<ViewCommentsProps> = ({ onCommentCardUpdate, comments }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log('handleClickOpen');
    setOpen(true);
  };

  const handleCloseAddCommentDialog = (value: CommentItem | undefined) => {
    setOpen(false);
    if (value === undefined) {
      console.log('Dialog close without adding comment');
      return;
    }

    console.log('Dialog close with comment', value);
    onCommentCardUpdate(undefined, UpdateType.COMMENT, value);
  };

  const handleCommentRating = (key: string, rating: number) => {
    console.log('handleCommentRating', rating);
    onCommentCardUpdate(key, UpdateType.RATING, rating);

    throw new Error('Not implemented');
  };

  return (
    <React.Fragment>
      <Accordion sx={{ width: '100%' }} elevation={5}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span">This update has {comments.length} comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {comments.map((comment, key) => (
            <CommentItemCard key={key} {...comment} />
          ))}
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add Comment
          </Button>
        </AccordionActions>
      </Accordion>

      <AddCommentDialog open={open} onClose={handleCloseAddCommentDialog} title="Add new comment" />
    </React.Fragment>
  );
};

export default ViewComments;
