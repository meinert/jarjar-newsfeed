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
import CardItem from './card-item';


const UpdateItem: React.FC<UpdateItemProps> = ({ by, heading, text, imageSrc, created, comments }): JSX.Element => {
  // constructor(props) {
  //   super(props);

  //   console.log('UpdateItem - App props:', props);
  // }

  // const { id, by, text, imageSrc, created } = props;

  // const cardHeader = (
  //   <CardHeader
  //     avatar={<Avatar alt={by} src={imageSrc} sx={{ width: 56, height: 56 }} />}
  //     title={by}
  //     subheader={<DateTimeFormatter date={created} showSeconds={false} />}
  //   />
  // );

  // const cardContent = (
  //   <CardContent sx={{ paddingTop: 0 }}>
  //     {/* <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
  //       News from a galaxy far, far away
  //     </Typography> */}
  //     <Typography variant="h5" component="div">
  //       {heading}
  //     </Typography>
  //     <Typography variant="body1">
  //       {text}
  //     </Typography>
  //   </CardContent>
  // );

  const cardActions = (
    <CardActions>
      <ViewComments comments={comments} />
    </CardActions>
  );

  return (
    <React.Fragment>
      <Box sx={{ minWidth: 275, padding: '1rem 0' }}>
        <Card variant="elevation">
          <CardItem by={by} heading={heading} text={text} imageSrc={imageSrc} created={created} />
          {cardActions}
        </Card>
      </Box>
    </React.Fragment>
  );
  
}

export default UpdateItem;