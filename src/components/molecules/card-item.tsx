import React, { JSX } from 'react';
import DateTimeFormatter from '../atomic/dateTimeUtil';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Rating,
  Snackbar,
  Tooltip,
  Typography
} from '@mui/material';
import { Item } from '../../models/updateAndComment';

interface CardItemProps {
  item: Item;
  heading?: string;
  actions?: JSX.Element;
  elevation?: number;
  onRating: (key: string, item: Item) => void;
}

// interface SnakBarState extends SnackbarOrigin {
//   open: boolean;
// }

const CardItem: React.FC<CardItemProps> = ({
  item,
  heading = undefined,
  actions,
  elevation = 1,
  onRating
}): JSX.Element => {
  const [rating, setRating] = React.useState<number>(item.rating);
  const [numberOfVotes, setNumberOfVotes] = React.useState<number>(item.numberOfVotes);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [lastRating, setLastRating] = React.useState<number>(0);

  const calculateAverageRating = (newValue) => {
    setNumberOfVotes((numberOfVotes) => numberOfVotes + 1);
    setRating((rating) => (rating * numberOfVotes + newValue) / (numberOfVotes + 1));
    onRating(item.id, item);
    setLastRating(newValue);
    setSnackbarOpen(true);
  };

  const cardHeader = (
    <CardHeader
      avatar={
        <Avatar alt={item.user.name} src={item.user.imageSrc} sx={{ width: 56, height: 56 }} />
      }
      title={item.user.name}
      subheader={<DateTimeFormatter date={item.created} showSeconds={false} />}
    />
  );

  const cardContent = (
    <CardContent sx={{ paddingTop: 0 }}>
      {heading && (
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
      )}
      <Typography variant="body1">{item.text}</Typography>

      <Tooltip title="Please leave you vote..." placement="top-start" followCursor>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              sx={{ marginTop: '8px' }}
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => {
                calculateAverageRating(newValue);
              }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary', marginLeft: 1 }}>
              ( Based on {numberOfVotes} votes )
            </Typography>
          </div>
        </div>
      </Tooltip>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message={'Thanks for your vote! You voted ' + lastRating + ' ★'}
      />
    </CardContent>
  );

  const cardActions = <CardActions>{actions}</CardActions>;

  return (
    <Box sx={{ minWidth: 275, padding: '1rem 0' }}>
      <Card variant="elevation" elevation={elevation}>
        {cardHeader}
        {cardContent}
        {actions && cardActions}
      </Card>
    </Box>
  );
};

export default CardItem;
