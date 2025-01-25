import React from 'react'
import { UpdateItem } from './update-item'
import { UpdatesProps } from '../models/updates'
// import PropTypes from 'prop-types'
// import moment from 'moment'

/**
 * A React component that displays a list of updates.
 * This component extends `React.PureComponent` to optimize rendering performance.
 *
 * @component
 * @extends React.PureComponent
 * @param {UpdatesProps} props - The properties passed to the component.
 *
 * @example
 * const updates = [
 *   { id: 1, title: 'Update 1', content: 'Content for update 1' },
 *   { id: 2, title: 'Update 2', content: 'Content for update 2' }
 * ];
 * 
 * <ViewUpdates updates={updates} />
 *
 * @returns {JSX.Element} A JSX element containing a list of updates.
 */
export default class ViewUpdates extends React.PureComponent<UpdatesProps> {
  constructor(props) {
    super(props);

    console.log('ViewUpdates - App props:', props);
  }

  render () {
    const { updates } = this.props;

    return (
      <div>
      {updates.map((update, index) => (
        <UpdateItem key={index} {...update} />
      ))}
      </div>
    );
  }
}
