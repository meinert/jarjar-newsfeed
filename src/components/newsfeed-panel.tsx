import React from 'react'
import PropTypes from 'prop-types'

// import ViewUpdate from './view-update'
// import AddUpdate from './add-update'

export default function NewsfeedPanel(props) { // TODO: This should be a panel with an option to click add news that should open a modal to add news. The panel should be shown on the side on large screens and in the top on smaller screens
  const {
    // onAddUpdate,
    // updates,
    title,
  } = props

  return (<div>
    <h1>{title} - NewsfeedPanel</h1>
    {/*
      * render a list of updates here
      * {updates.map(update => <ViewUpdate {...update} />)}
      */}
  </div>)
}

NewsfeedPanel.propTypes = {
  onAddUpdate: PropTypes.func.isRequired,
  updates: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
}
