import React from 'react';
import { User } from '../models/user';
import { users } from '../data';

interface AppContextProps {
  user: User;
  setUser: (user: User) => void;
}

export const AppContext = React.createContext<AppContextProps>({
  user: users[0], // Setting the default user
  setUser: (user: User) => {}
});
