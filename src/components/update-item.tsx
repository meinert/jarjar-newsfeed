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


const UpdateItem: React.FC<UpdateItemProps> = ({id, by, heading, text, imageSrc, created }): JSX.Element => {
  // constructor(props) {
  //   super(props);

  //   console.log('UpdateItem - App props:', props);
  // }

  // const { id, by, text, imageSrc, created } = props;

  const locale = useContext(LocalizationContext);

  console.log('UpdateItem - locale:', locale);
  
  const card = (
    <Box sx={{ minWidth: 275, padding: 2 }}>
      <Card variant="elevation">
      <CardHeader
        avatar={
          <Avatar alt={by} src={imageSrc} sx={{ width: 56, height: 56 }} />
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="News from a galaxy far, far away"
        subheader={<DateTimeFormatter date={created}></DateTimeFormatter>} // TODO: Use a localization library
      />
        
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
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        
      </Card>
      </Box>
    
  );
  
    return (
      <React.Fragment>
        {card}
      </React.Fragment>
    );
  
}

export default UpdateItem;