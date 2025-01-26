import jarjarImage from './assets/jarjar.jpg';
import r2Image from './assets/r2d2.jpg';
import c3poImage from './assets/3po.jpg';
import b1droidImage from './assets/b1droid.jpg';

import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { CommentItem, UpdateItem, Updates } from './models/updates';

const getRandomDate = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(5 * 24 * 60));
  return moment(Date.now()).subtract(randomNumber, 'minute').toDate();
};

export const comment = (
  by: string,
  text: string,
  imageSrc: any,
  created: Date = getRandomDate()
): CommentItem => ({
  text,
  by,
  created,
  imageSrc,
  id: uuid()
});

export const update = (
  by: string,
  heading: string,
  text: string,
  imageSrc: any,
  created: Date = getRandomDate()
): UpdateItem => {
  return {
    by,
    heading,
    text,
    created,
    imageSrc,
    id: uuid(),
    comments: [
      comment('C3P0', "Sir, it's very possible this asteroid is not stable", c3poImage),
      comment('C3P0', 'I suggest a new strategy, Artoo: let the Wookie win', c3poImage),
      comment('B1 battle droid', 'Roger, roger.', b1droidImage)
    ]
  };
};

const data: Updates = {
  updates: [
    update(
      'Jar Jar',
      'Call from Mesa',
      'Mesa called Jar Jar Binks, mesa your humble servant!',
      jarjarImage
    ),
    update('R2-D2', 'Bleep boop', 'Bleep boop, beep beep.', r2Image),
    update(
      'Jar Jar',
      'Yousa should follow me',
      "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.",
      jarjarImage
    ),
    update(
      'Jar Jar',
      'The BOOOM!',
      'The BOOOM! Getin very scared and grabin that Jedi, the pah ... mesa here',
      jarjarImage
    ),
    update(
      'Jar Jar',
      'A Pact',
      'It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, "Dellow Felagates." In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.',
      jarjarImage
    )
  ]
};

export default data;
