import React, { JSX } from 'react';
import { Item } from '../../models/updateAndComment';
import { CardItemMemo } from '../molecules/card-item';

interface CardCommentProps {
  item: Item;
  onRating: (key: string, item: Item) => void;
}

const CardComment: React.FC<CardCommentProps> = ({ item, onRating }): JSX.Element => {
  return <CardItemMemo onRating={onRating} item={item} elevation={20} />;
};

export default CardComment;
