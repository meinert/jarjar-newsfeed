// import jarjarImage from '../assets/jarjar.jpg';
// import r2Image from '../assets/r2d2.jpg';
// import c3poImage from '../assets/3po.jpg';
// import b1droidImage from '../assets/b1droid.jpg';

import { v4 as uuid } from 'uuid';

export interface Updates {
  updates: UpdateItem[];
}

export interface UpdateItem {
  id: string;
  by: string;
  heading: string;
  text: string;
  imageSrc: string;
  created: Date;
  comments: CommentItem[];
}

export interface CommentItem {
  id: string;
  by: string;
  text: string;
  imageSrc: string;
  created: Date;
}

export class UpdatesFactory {
  static createUpdateItem(by: string, heading: string, text: string): UpdateItem {
    return {
      id: uuid(),
      by,
      heading,
      text,
      imageSrc: by, // TODO: Change based on "by"
      created: new Date(),
      comments: []
    };
  }

  static createCommentItem(by: string, text: string): CommentItem {
    return {
      id: uuid(),
      by,
      text,
      imageSrc: by, // TODO: Change based on "by"
      created: new Date()
    };
  }
}
