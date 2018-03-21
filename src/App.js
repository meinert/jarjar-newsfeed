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
    this.setState((state) => ({
      updates: [
        ...state.updates,
        update('You', text),
      ],
    }))
  }

  handleUpdateAction = (id, action, value) => {
    console.log({ id, action, value, })
    this.setState((state) => ({
      updates: state.updates.map((update) => {
        if (!update.id === id) {
          return update
        }

        if (action === 'comment') {
          return {
            ...update,
            comments: [
              ...update.comments,
              comment('You', value),
            ],
          }
        }

        return {
          ...update,
          [action]: value,
        }
      }),
    }))
  }

  render () {
    const {
      updates,
    } = this.state

    return (
      <div className='container'>
        <JarJarNewsfeed
          updates={updates}
          onAddUpdate={this.handleAddUpdate}
          onUpdateAction={this.handleUpdateAction}
        />
      </div>
    )
  }
}

export default App
