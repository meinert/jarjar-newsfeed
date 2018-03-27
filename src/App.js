import React, { Component, } from 'react'
import './App.css'
import data, {
  comment,
  update,
} from './data'
import JarJarNewsfeed from './components/newsfeed'

class App extends Component {
  state = {
    updates: data.updates,
  }

  handleAddUpdate = (text) => {
    console.log('Add an update to updates, with text: ', text);
  }

  render () {
    const {
      updates,
    } = this.state

    return (
      <div className='container'>
        {/* Display the newsfeed */}
        <JarJarNewsfeed
          updates={updates}
          onAddUpdate={this.handleAddUpdate}
        />
      </div>
    )
  }
}

export default App
