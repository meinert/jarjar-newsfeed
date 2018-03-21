import React, {PureComponent, } from 'react'
import PropTypes from 'prop-types'

import ViewComment from './view-comment'
import AddComment from './add-comment'

export default class CommentsList extends PureComponent {
  static propTypes = {
    onComment: PropTypes.func.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  }

  render () {
    const {
      comments,
      onComment,
    } = this.props

    return (<div className='comments-list'>
      <AddComment onSubmit={onComment} />
      <ul>
        {comments.map((comment) => <ViewComment {...comment} key={comment.id} />)}
      </ul>
    </div>)
  }
}
