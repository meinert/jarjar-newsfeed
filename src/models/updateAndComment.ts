// import jarjarImage from '../assets/jarjar.jpg';
// import r2Image from '../assets/r2d2.jpg';
// import c3poImage from '../assets/3po.jpg';
// import b1droidImage from '../assets/b1droid.jpg';

import { v4 as uuid } from 'uuid';
import { User } from './user';

export interface Updates {
  updates: UpdateItem[];
}

export interface Item {
  id: string;
  user: User;
  text: string;
  created: Date;
  rating: number;
  numberOfVotes: number;
}

export interface UpdateItem extends Item {
  heading: string;
  comments: CommentItem[];
}

export interface CommentItem extends Item {}

export class UpdatesFactory {
  static createUpdateItem(
    user: User,
    heading: string,
    text: string,
    comments?: CommentItem[],
    created?: Date,
    rating?: number,
    numberOfVotes?: number
  ): UpdateItem {
    return {
      id: uuid(),
      user,
      heading,
      text,
      created: created || new Date(),
      rating: rating || 0,
      numberOfVotes: numberOfVotes || 0,
      comments: comments || []
    };
  }

  static createCommentItem(
    user: User,
    text: string,
    imageSrc?: string,
    created?: Date
  ): CommentItem {
    return {
      id: uuid(),
      user,
      text,
      created: created || new Date(),
      rating: 0,
      numberOfVotes: 0
    };
  }
}
