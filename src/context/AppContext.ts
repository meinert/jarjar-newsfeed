import React from 'react';
import { User } from '../models/user';

interface AppContextProps {
  user: User;
  changeUser: (user: User) => void;
}

export const AppContext = React.createContext<AppContextProps>({
  user: {} as User,
  changeUser: () => {}
});
