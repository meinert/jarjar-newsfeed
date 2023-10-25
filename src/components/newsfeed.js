import React from 'react'
import PropTypes from 'prop-types'

// import ViewUpdate from './view-update'
// import AddUpdate from './add-update'

export default function JarJarNewsfeed(props) {
  const {
    // onAddUpdate,
    // updates,
    title,
  } = props

  return (<div>
    <h1>{title} - Newsfeed</h1>
    {/*
      * render a list of updates here
      * {updates.map(update => <ViewUpdate {...update} />)}
      */}
  </div>)
}

JarJarNewsfeed.propTypes = {
  onAddUpdate: PropTypes.func.isRequired,
  updates: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
}
