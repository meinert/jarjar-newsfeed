import React, { JSX } from 'react';
import DateTimeFormatter from '../atomic/dateTimeUtil';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';

interface CardItemProps {
  by: string;
  heading?: string;
  text: string;
  imageSrc: string;
  created: Date;
  actions?: JSX.Element;
}

const CardItem: React.FC<CardItemProps> = ({
  by,
  heading = undefined,
  text,
  imageSrc,
  created,
  actions
}): JSX.Element => {
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
    </CardContent>
  );

  const cardActions = <CardActions>{actions}</CardActions>;

  return (
    <Box sx={{ minWidth: 275, padding: '1rem 0' }}>
      <Card variant="elevation">
        {cardHeader}
        {cardContent}
        {actions && cardActions}
      </Card>
    </Box>
  );
};

export default CardItem;
