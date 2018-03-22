import React, {
  PureComponent,
} from 'react'
import PropTypes from 'prop-types'

export default class AddComment extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    comment: '',
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value, })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.comment)

    this.setState({
      comment: '',
    })
  }

  render () {
    const {
      comment,
    } = this.state

    return (<form onSubmit={this.handleSubmit}>
      <textarea className='form-control' value={comment} onChange={this.handleChange} />
      <button onClick={this.handleSubmit}>save</button>
    </form>)
  }
}
