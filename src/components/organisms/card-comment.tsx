import React, { JSX } from 'react';
import { CommentItem } from '../../models/updates';
import CardItem from '../molecules/card-item';

const CardComment: React.FC<CommentItem> = ({ by, text, imageSrc, created }): JSX.Element => {
  return <CardItem by={by} text={text} imageSrc={imageSrc} created={created} />;
};

export default CardComment;
