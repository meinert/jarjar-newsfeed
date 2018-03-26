import React, {
  PureComponent,
} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import imageElement from './../jarjar.jpg'

export default class ViewComment extends PureComponent {
  static propTypes = {
    by: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
  }

  static defaultProps = {
    imageSrc: imageElement,
  }

  render () {
    const {
      by,
      created,
      text,
      imageSrc,
    } = this.props

    const createdDate = moment(created).fromNow()

    return (<li className='view-comment small'>
      <img alt='' src={imageSrc} />
      {text}
      <br />
      <em>– {by} ({createdDate})</em>
    </li>)
  }
}
