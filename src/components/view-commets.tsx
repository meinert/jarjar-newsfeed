import React from 'react'
import UpdateItem from './update-item'
import { CommentProps } from '../models/updates'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentItem from './comment-item';
import CardItem from './card-item';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

/**
 * A React component that displays a list of comments for an update.
 * This component extends `React.PureComponent` to optimize rendering performance.
 *
 * @component
 * @extends React.PureComponent
 * @param {CommentProps} props - The properties passed to the component.
 *
 * @example
 * const updates = [
 *   { id: 1, title: 'Update 1', content: 'Content for update 1' },
 *   { id: 2, title: 'Update 2', content: 'Content for update 2' }
 * ];
 * 
 * <ViewUpdates updates={updates} />
 *
 * @returns {JSX.Element} A JSX element containing a list of updates.
 */
interface ViewCommentsProps {
    comments: CommentProps[];
}

const ViewComments: React.FC<ViewCommentsProps> = ({ comments }) => {
    return (
        <React.Fragment>
            <Accordion sx={{ width: '100%' }} elevation={5}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">This update has {comments.length} comments</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {comments.map((comment, key) => (
                        // <Box sx={{ padding: '1rem 0' }}>
                            <Card variant="elevation" sx={{ margin: '1rem', backgroundColor: '#f9f9f9' }}>
                                <CardItem heading={''} key={key} {...comment} />
                            </Card>
                        // </Box>
                    ))}
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    );
};

export default ViewComments;
