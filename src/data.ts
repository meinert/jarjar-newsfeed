import jarjarImage from './assets/jarjar.jpg';
import r2Image from './assets/r2d2.jpg';
import c3poImage from './assets/3po.jpg';
import b1droidImage from './assets/b1droid.jpg';

import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { CommentItem, UpdateItem, Updates } from './models/updateAndComment';
import { User } from './models/user';
import { randomNumber } from './utils/miscUtils';

export const users: User[] = [
  { id: uuid(), name: 'Jar Jar', imageSrc: jarjarImage },
  { id: uuid(), name: 'R2-D2', imageSrc: r2Image },
  { id: uuid(), name: 'C3P0', imageSrc: c3poImage },
  { id: uuid(), name: 'B1 battle droid', imageSrc: b1droidImage }
];

const starWarsComments: string[] = [
  'I find your lack of faith disturbing.',
  'Do or do not, there is no try.',
  "I've got a bad feeling about this.",
  'Help me, Obi-Wan Kenobi. You’re my only hope.',
  "It's a trap!",
  'Aren’t you a little short for a stormtrooper?',
  'These aren’t the droids you’re looking for.',
  'I am your father.',
  'The Force will be with you. Always.',
  'Never tell me the odds!',
  'In my experience, there is no such thing as luck.',
  'I suggest a new strategy, Artoo: let the Wookie win.',
  'When 900 years old, you reach… Look as good, you will not.',
  'Great, kid. Don’t get cocky.',
  'You underestimate the power of the Dark Side.',
  'Somebody has to save our skins.',
  'The Force is strong with this one.',
  'Judge me by my size, do you?',
  'I am a Jedi, like my father before me.',
  'Roger, roger.'
];

const starWarsNewsUpdates = [
  {
    heading: "Darth Vader's New Helmet",
    newsUpdate:
      'Darth Vader unveils his new helmet design, featuring a built-in coffee maker and Bluetooth speakers.'
  },
  {
    heading: "Yoda's Cooking Show",
    newsUpdate:
      "Yoda launches a new cooking show, 'Cooking with the Force,' where he teaches viewers how to make Dagobah stew."
  },
  {
    heading: "Han Solo's New Business",
    newsUpdate:
      "Han Solo starts a new business venture, 'Solo's Smuggling Services,' offering fast and discreet deliveries across the galaxy."
  },
  {
    heading: "Chewbacca's Hair Care Line",
    newsUpdate:
      "Chewbacca releases a new line of hair care products, 'Wookiee Waves,' promising to tame even the wildest fur."
  },
  {
    heading: "Leia's Leadership Seminar",
    newsUpdate:
      "Princess Leia hosts a leadership seminar, 'Leading with the Force,' sharing her tips on effective leadership and diplomacy."
  },
  {
    heading: "R2-D2's DJ Career",
    newsUpdate:
      'R2-D2 takes the music world by storm with his new DJ career, performing at cantinas across the galaxy.'
  },
  {
    heading: "C-3PO's Etiquette Classes",
    newsUpdate:
      'C-3PO offers etiquette classes for droids and humans alike, teaching the finer points of intergalactic manners.'
  },
  {
    heading: "Boba Fett's Bounty Hunting Tips",
    newsUpdate:
      "Boba Fett publishes a book, 'Bounty Hunting for Beginners,' sharing his expert tips on tracking and capturing targets."
  },
  {
    heading: "Obi-Wan's Meditation Retreat",
    newsUpdate:
      'Obi-Wan Kenobi opens a meditation retreat on Tatooine, offering guests a chance to relax and connect with the Force.'
  },
  {
    heading: "Jar Jar Binks' Comedy Tour",
    newsUpdate:
      'Jar Jar Binks embarks on a galaxy-wide comedy tour, bringing laughter to planets far and wide with his unique sense of humor.'
  }
];

const getRandomDate = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(5 * 24 * 60));
  return moment(Date.now()).subtract(randomNumber, 'minute').toDate();
};

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateUpdateItem = (): UpdateItem => {
  const user = getRandomElement(users);
  const newsUpdate = getRandomElement(starWarsNewsUpdates);
  const commentsArray: CommentItem[] = [];
  const numberOfComments = randomNumber(1, 5);

  for (let i = 0; i < numberOfComments; i++) {
    const comment = getRandomElement(starWarsComments);
    const user = getRandomElement(users);
    commentsArray.push({
      id: uuid(),
      user: user,
      text: comment,
      created: getRandomDate(),
      rating: randomNumber(1, 5),
      numberOfVotes: randomNumber(1, 10)
    });
  }

  return {
    id: uuid(),
    user: user,
    heading: newsUpdate.heading,
    text: newsUpdate.newsUpdate,
    created: getRandomDate(),
    rating: randomNumber(1, 5),
    numberOfVotes: randomNumber(1, 10),
    comments: commentsArray
  } as UpdateItem;
};

const generateUpdates = (count: number): Updates => {
  const updates: Updates = { updates: [] };
  for (let i = 0; i < count; i++) {
    updates.updates.push(generateUpdateItem());
  }
  return updates;
};

const data = generateUpdates(10);

export default data;
