import React from 'react'
import PropTypes from 'prop-types'

import ViewUpdate from './view-update'
import AddUpdate from './add-update'

export default class JarJarNewsfeed extends React.PureComponent {
  static propTypes = {
    onUpdateAction: PropTypes.func.isRequired,
    onAddUpdate: PropTypes.func.isRequired,
    updates: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })).isRequired,
  }

  render () {
    const {
      onAddUpdate,
      onUpdateAction,
      updates,
    } = this.props

    return (
      <div className='jarjar-newsfeed'>
        <h1>Jar Jar Newsfeed</h1>
        <AddUpdate
          onSubmit={onAddUpdate}
        />
        {updates.map((update) => <ViewUpdate
          {...update}
          key={update.id}
          onAction={onUpdateAction}
        />)}
      </div>
    )
  }
}
