import jarjarImage from '../assets/jarjar.jpg';
import r2Image from '../assets/r2d2.jpg';
import c3poImage from '../assets/3po.jpg';
import b1droidImage from '../assets/b1droid.jpg';

import { v4 as uuid } from 'uuid';

export interface UpdatesProps {
    updates: UpdateItemProps[];
}

export interface UpdateItemProps {
    id: string;
    by: string;
    heading: string;
    text: string;
    imageSrc: string;
    created: Date;
    comments: CommentProps[];
}

export interface CommentProps {
    id: string;
    by: string;
    text: string;
    imageSrc: string;
    created: Date;
}

export class UpdatesFactory {
    static createUpdateItem(
        by: string,
        heading: string,
        text: string,
    ): UpdateItemProps {
        return {
            id: uuid(),
            by,
            heading,
            text,
            imageSrc: jarjarImage, // TODO: Change based on "by"
            created: new Date(),
            comments: []
        };
    }
}
