import React, { Component } from 'react';
import './App.css';
import data from './data';

import ViewUpdates from './components/view-updates';
import { UpdatesProps } from './models/updates';
import NewsfeedPanel from './components/newsfeed-panel';

const compareUpdates = (a, b) => {
  return b.created - a.created
}

class App extends Component<UpdatesProps> {
  constructor(props) {
    super(props);

    this.handleAddUpdate = this.handleAddUpdate.bind(this);

    console.log('App props:', props);
    console.log('Data:', data);
  }

  handleAddUpdate(text) {
    console.log('Add an update to updates, with text: ', text);
  }

  render() {
    const { updates } = data;

    return (
      <div>
        <div className='container'>
          {/* Display the newsfeed */}
          <NewsfeedPanel
            title="Jar Jar PPO"
            updates={updates}
            onAddUpdate={this.handleAddUpdate}
          />
        </div>
        <div>
          <ViewUpdates updates={updates} ></ViewUpdates>
        </div>
      </div>
    );
  }
}

export default App;
