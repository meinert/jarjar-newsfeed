import React, { PureComponent, } from 'react'
import PropTypes from 'prop-types'

const actions = {
  like: 'Like!',
  dislike: 'Nah',
}

const trueClasses = {
  like: 'btn-success',
  dislike: 'btn-danger',
}

export default class ReactionButton extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(actions)),
    onClick: PropTypes.func.isRequired,
    value: PropTypes.bool,
  }

  static defaultProps = {
    value: false,
  }

  handleClick = () => {
    const {
      value,
      onClick,
      type,
    } = this.props

    return onClick(type, !value)
  }

  render () {
    const {
      type,
      value,
    } = this.props

    return (
      <button onClick={this.handleClick} className={`btn ${value ? trueClasses[type] : 'btn-link'}`}>
        {actions[type]}
      </button>
    )
  }
}
