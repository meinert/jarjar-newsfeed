import React from 'react'
import PropTypes from 'prop-types'

export default class ViewUpdate extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired
  }

  render () {
    const {
      text,
      by,
      created
    } = this.props

    return (
      <div className='view-update'>
        <blockquote>{text}</blockquote>
        <em>By {by} @ {created}</em>
      </div>
    )
  }
}
