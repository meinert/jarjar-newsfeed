import React from 'react';
import { CommentItem, Item } from '../../models/updateAndComment';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import AddCommentDialog from '../molecules/add-comment-dialog';
import { UpdateType } from '../../models/enums';
import CardComment from './card-comment';

interface ViewCommentsProps {
  onCommentCardUpdate: (key: string | undefined, updateType: UpdateType, update: Item) => void;
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

  const handleCommentRating = (key: string, item: CommentItem) => {
    console.log('handleCommentRating', key, item);
    onCommentCardUpdate(key, UpdateType.RATING, item);
  };

  return (
    <React.Fragment>
      <Accordion sx={{ width: '100%' }} elevation={10}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span">This update has {comments.length} comments </Typography>
          {comments.length === 0 && (
            <Typography
              paddingLeft="10px"
              component="span"
              sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              BE THE FIRST TO LEAVE A COMMENT
            </Typography>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            sx={{ marginLeft: 'auto', display: 'block' }}>
            Add Comment
          </Button>
          {comments.map((comment, key) => (
            <CardComment onRating={handleCommentRating} key={key} item={comment} />
          ))}
        </AccordionDetails>
      </Accordion>

      <AddCommentDialog open={open} onClose={handleCloseAddCommentDialog} title="Add new comment" />
    </React.Fragment>
  );
};

export default ViewComments;
