import React, { JSX, useContext } from 'react';
import { LocalizationContext } from '../context/LocalizationContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UpdateItemProps } from '../models/updates';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import DateTimeFormatter from '../utils/dateTimeUtil';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import ViewComments from './view-commets';

interface CardItemProps {
    by: string;
    heading: string;
    text: string;
    imageSrc: string;
    created: Date;
}

/**
 * CardItem component displays the header and content for a card. It should be used inside a `Card` component.
 * 
 * @example
 *  <Card variant="elevation">
      <CardItem by={by} heading={heading} text={text} imageSrc={imageSrc} created={created} />
    </Card>
 *
 * @component
 * @param {CardItemProps} props - The properties for the CardItem component.
 * @param {string} props.by - The author of the card.
 * @param {string} props.heading - The heading text of the card.
 * @param {string} props.text - The main content text of the card.
 * @param {string} props.imageSrc - The source URL for the avatar image.
 * @param {Date} props.created - The creation date of the card.
 * @returns {JSX.Element} The rendered CardItem component.
 */
const CardItem: React.FC<CardItemProps> = ({ by, heading, text, imageSrc, created }): JSX.Element => {

  const cardHeader = (
    <CardHeader
      avatar={<Avatar alt={by} src={imageSrc} sx={{ width: 56, height: 56 }} />}
      title={by}
      subheader={<DateTimeFormatter date={created} showSeconds={false} />}
    />
  );

  const cardContent = (
    <CardContent sx={{ paddingTop: 0 }}>
      {/* <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        News from a galaxy far, far away
      </Typography> */}
      <Typography variant="h5" component="div">
        {heading}
      </Typography>
      <Typography variant="body1">
        {text}
      </Typography>
    </CardContent>
  );

  return (
    <React.Fragment>
          {cardHeader}
          {cardContent}
    </React.Fragment>
  );
  
}

export default CardItem;