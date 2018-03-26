import React from 'react'
import PropTypes from 'prop-types'

import CommentsList from './comments-list'
import ReactionButton from './reaction-button'

import imageElement from './../jarjar.jpg'
import moment from 'moment'

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
    imageSrc: PropTypes.string,
  }

  static defaultProps = {
    imageSrc: imageElement,
  }

  state = {
    showComments: false,
    hideComments: false,
  }

  componentDidMount () {
    if (this.props.sounds) {
      console.log('how rude')
      const audio = new Audio('/rude.mp3')
      audio.play()
    }
  }

  handleToggleShowComments = () => {
    const {
      showComments,
    } = this.state

    if (showComments) {
      this.setState({
        hideComments: true,
      })

      setTimeout(() => {
        this.setState({
          showComments: false,
          hideComments: false,
        })
      }, 3000)
    } else {
      this.setState({
        showComments: true,
      })
    }
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
      imageSrc,
    } = this.props

    const {
      showComments,
      hideComments,
    } = this.state

    const createdDate = moment(created).fromNow()

    return (
      <div className={`card view-update ${showComments ? 'comments-open' : 'comments-closed'}`}>
        <div className='card-body'>
          <img src={imageSrc} alt='' />
          <blockquote>{text}</blockquote>
          <em>– {by} ({createdDate})</em>
        </div>
        <div className='card-footer'>
          <button className='btn btn-link' onClick={this.handleToggleShowComments} type='button' disabled={hideComments}>
            {comments.length} comments
          </button>
          <div className='btn-group btn-group-sm float-right'>
            <ReactionButton onClick={this.handleAction} type='like' value={like} />
            <ReactionButton onClick={this.handleAction} type='dislike' value={dislike} />
          </div>
          {showComments && <CommentsList hide={hideComments} comments={comments} onComment={this.handleAddComment} />}
        </div>
      </div>
    )
  }
}
