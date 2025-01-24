export interface UpdatesProps {
    updates: UpdateItemProps[];
}

export interface UpdateItemProps {
    id: string;
    by: string;
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