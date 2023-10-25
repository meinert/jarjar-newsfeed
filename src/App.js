import React, {Component, useCallback, useState,} from 'react'
import './App.css'
import data, {
  // comment,
  // update,
} from './data'
import JarJarNewsfeed from './components/newsfeed'

export function App() {

  const [updates, setUpdates] = useState([])

    const handleAddUpdate = useCallback(
        /**
         * @param {string }text
         */
        (text) => {
            console.log('Add an update to updates, with text: ', text);
        },
   [])

  return (
      <div className='container'>
        {/* Display the newsfeed */}
        <JarJarNewsfeed
            title="Jar Jar"
            updates={updates}
            onAddUpdate={handleAddUpdate}
        />
      </div>
  )
}
