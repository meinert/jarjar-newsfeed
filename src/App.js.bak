import React, { Component, } from 'react'
import './App.css'
import data, {
  comment,
  update,
} from './data'
import JarJarNewsfeed from './components/newsfeed'

const compareUpdates = (a, b) => {
  return b.created - a.created
}

class App extends Component {
  state = {
    updates: data.updates,
  }

  handleAddUpdate = (text) => {
    this.setState((state) => ({
      updates: [
        ...state.updates,
        update('You', text, undefined, Date.now()),
      ].sort(compareUpdates),
    }))
  }

  handleUpdateAction = (id, action, value) => {
    this.setState((state) => {
      const newUpdates = state.updates.map((update) => {
        if (update.id !== id) {
          return update
        }

        if (action === 'comment') {
          return {
            ...update,
            comments: [
              ...update.comments,
              comment('You', value, undefined, Date.now()),
            ],
          }
        }

        return {
          ...update,
          [action]: value,
        }
      })

      return {
        updates: newUpdates,
      }
    })
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
