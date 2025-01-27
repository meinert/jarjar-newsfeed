import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Box } from '@mui/material';
import { users } from '../../data';

const ChangeUserComponent: React.FC = () => {
  const { user, changeUser } = useContext(AppContext);

  const allUsers = users;

  const handleChangeUser = (event: SelectChangeEvent) => {
    const newUser = allUsers.find((user) => user.id === event.target.value);
    console.log('New user selected', newUser);
    if (newUser) {
      changeUser(newUser);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel sx={{ color: 'white', marginBottom: 0, paddingLeft: '6px' }}>
        Select User
      </InputLabel>
      <FormControl
        sx={{
          m: 1,
          minWidth: 160,
          backgroundColor: 'white',
          borderRadius: 1,
          marginBottom: '34px'
        }}
        size="small">
        <Select
          id="demo-select-small"
          value={user.id}
          onChange={handleChangeUser}
          sx={{ color: 'black' }}>
          {allUsers.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChangeUserComponent;
