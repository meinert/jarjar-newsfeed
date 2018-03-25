import React, {PureComponent, } from 'react'
import PropTypes from 'prop-types'

export default class AddUpdate extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    update: '',
  }

  handleChange = (event) => {
    this.setState({
      update: event.target.value
        .replace(/I /, 'Mesa ')
        .replace(/(^| )you /, '$1yousa ')
        .replace(/(^| )You /, '$1Yousa ')
        .replace(/i want those droids/i, 'these are not the droids I\'m looking for')
        .replace(/ me /g, ' mesa '),
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.update)

    this.setState({
      update: '',
    })
  }

  render () {
    const {
      update,
    } = this.state

    return (<form onSubmit={this.handleSubmit} className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>Yousa add update:</h5>
        <div className='form-group'>
          <textarea className='form-control form-control-sm' onChange={this.handleChange} name='text' value={update} />
          <button disabled={update.length === 0} className='btn btn-primary add-update-button' type='submit'>Add update</button>
        </div>
      </div>
    </form>)
  }
}
