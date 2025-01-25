import React from 'react';
import './App.scss';
import data from './data';

import ViewUpdates from './components/view-updates';
import { UpdateItemProps, UpdatesProps } from './models/updates';
import NewsfeedPanel from './components/newsfeed-panel';

import Grid from '@mui/material/Grid2';
import { SortOrder, SortKey } from './models/enums';
import { sortUtil } from './utils/sortOrderUtil';

interface AppProps {
  updates: UpdateItemProps[];
  sortOrder: SortOrder;
  sortKey: SortKey;
};

class App extends React.Component {
  defaultSortOrder = SortOrder.DSC;
  defaultSortKey = SortKey.CREATED;

  state: AppProps = {
    updates: data.updates.sort((a, b) => sortUtil(a, b, this.defaultSortKey, this.defaultSortOrder)),
    sortOrder: this.defaultSortOrder,
    sortKey: this.defaultSortKey
    };

  handleAddUpdate = (update: UpdateItemProps) => {
    this.setState((state: AppProps) => {
      const updates: UpdateItemProps[] = [...state.updates, update];

      console.log('Add an update to updates', update, updates);
      return { updates };
    });

    this.handleSortUpdates();
  }

  handleSortUpdates = () => {
    this.setState((state: AppProps) => {
      const updates: UpdateItemProps[] = state.updates.sort((a, b) => sortUtil(a, b, state.sortKey, state.sortOrder));

      console.log('Sort updates', updates);
      return { updates };
    });
  }

  render() {
    const updates = this.state.updates

    return (
      <React.Fragment>
        <div className='content'>
          <NewsfeedPanel
                  title="Jar Jar PPO"
                  onAddUpdate={this.handleAddUpdate}
                />
          <ViewUpdates updates={updates} ></ViewUpdates>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
