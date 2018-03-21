import React from 'react'
import PropTypes from 'prop-types'

import ViewUpdate from './view-update'

export default class JarJarNewsfeed extends React.PureComponent {
  static propTypes = {
    updates: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    })).isRequired
  }

  render () {
    const {
      updates
    } = this.props

    return (
      <div className='jarjar-newsfeed'>
        <div>ADD UPDATE</div>
        {updates.map((update) => <ViewUpdate {...update} key={update.id} />)}
      </div>
    )
  }
}
