import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './AppContext';
import { User } from '../models/user';
import { users } from '../data';

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(users[0]); // Setting the default user to the first user in the array

  const changeUser = (newUser: User) => {
    console.log('Change user in  context', newUser);
    setUser(() => newUser);
  };

  return <AppContext.Provider value={{ user, changeUser }}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
