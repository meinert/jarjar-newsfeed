import React, { PureComponent } from 'react';
import { UpdateItemProps } from '../models/updates';

export class UpdateItem extends PureComponent<UpdateItemProps> {
  constructor(props) {
    super(props);

    console.log('UpdateItem - App props:', props);
  }
  
  render() {
    const { by, text, imageSrc, created } = this.props;
    return (
      <div>
        <h3>{by}</h3>
        <p>{text}</p>
        {/* Subcomponent will use imageSrc and created later */}
      </div>
    );
  }
}