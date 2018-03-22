import React from 'react'
import PropTypes from 'prop-types'

import CommentsList from './comments-list'
import ResponseButton from './response-button'

export default class ViewUpdate extends React.PureComponent {
  static propTypes = {
    sounds: PropTypes.bool.isRequired,
    onAction: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    like: PropTypes.bool,
    dislike: PropTypes.bool,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  }

  state = {
    showComments: false,
  }

  componentDidMount () {
    if (this.props.sounds) {
      console.log('how rude');
      const audio = new Audio('/rude.mp3')
      audio.play()
    }
  }

  handleToggleShowComments = () => {
    this.setState({
      showComments: !this.state.showComments,
    })
  }

  handleAction = (action, value) => {
    const {
      onAction,
      id,
    } = this.props

    return onAction(id, action, value)
  }

  handleAddComment = (text) => {
    return this.handleAction('comment', text)
  }

  render () {
    const {
      text,
      by,
      created,
      comments,
      like,
      dislike,
    } = this.props

    const {
      showComments,
    } = this.state

    return (
      <div className='card view-update'>
        <div className='card-body'>
          <blockquote>{text}</blockquote>
          <em>By {by} @ {created}</em>
        </div>
        <div className='card-footer'>
          <div className='btn-group btn-group-sm'>
            <button className='btn btn-link' onClick={this.handleToggleShowComments} type='button'>
              {comments.length} comments
            </button>
            <ResponseButton onClick={this.handleAction} type='like' value={like} />
            <ResponseButton onClick={this.handleAction} type='dislike' value={dislike} />
          </div>
          {showComments && <CommentsList comments={comments} onComment={this.handleAddComment} />}
        </div>
      </div>
    )
  }
}
