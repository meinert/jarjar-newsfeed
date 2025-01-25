import React from 'react'
import UpdateItem from './update-item'
import { CommentProps } from '../models/updates'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const CommentItem: React.FC<CommentProps> = ({ by, text, imageSrc, created }) => {
    
    const comment = (
        <div className="comment">
            <img src={imageSrc} alt="Commenter" />
        </div>
    )

    return (
        <React.Fragment>
                <AccordionDetails>
                    {comment}
                </AccordionDetails>
        </React.Fragment>
    );
};

export default CommentItem;
