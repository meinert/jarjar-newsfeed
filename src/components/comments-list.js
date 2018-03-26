import React, {PureComponent, } from 'react'
import PropTypes from 'prop-types'

import ViewComment from './view-comment'
import AddComment from './add-comment'

export default class CommentsList extends PureComponent {
  static propTypes = {
    hide: PropTypes.bool.isRequired,
    onComment: PropTypes.func.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  }

  render () {
    const {
      comments,
      onComment,
      hide,
    } = this.props

    return (<div className={`comments-list ${hide ? 'hide' : 'not-hide'}`}>
      <AddComment onSubmit={onComment} />
      <ul>
        {comments
          .slice()
          .sort((a, b) => b.created - a.created)
          .map((comment) => <ViewComment {...comment} key={comment.id} />)}
      </ul>
    </div>)
  }
}
