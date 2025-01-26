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
  Tooltip,
  Typography
} from '@mui/material';
import { randomNumber } from '../../utils/miscUtils';

interface CardItemProps {
  by: string;
  heading?: string;
  text: string;
  imageSrc: string;
  created: Date;
  actions?: JSX.Element;
  elevation?: number;
}

const CardItem: React.FC<CardItemProps> = ({
  by,
  heading = undefined,
  text,
  imageSrc,
  created,
  actions,
  elevation = 1
}): JSX.Element => {
  const [rating, setRating] = React.useState<number>(randomNumber(1, 5));
  const [numberOfVotes, setNumberOfVotes] = React.useState<number>(randomNumber(1, 10));

  const calculateAverageRating = (newValue) => {
    setNumberOfVotes((numberOfVotes) => numberOfVotes + 1);
    setRating((rating) => (rating * numberOfVotes + newValue) / (numberOfVotes + 1));
  };

  const cardHeader = (
    <CardHeader
      avatar={<Avatar alt={by} src={imageSrc} sx={{ width: 56, height: 56 }} />}
      title={by}
      subheader={<DateTimeFormatter date={created} showSeconds={false} />}
    />
  );

  const cardContent = (
    <CardContent sx={{ paddingTop: 0 }}>
      {heading && (
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
      )}
      <Typography variant="body1">{text}</Typography>

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
