import React, { PureComponent } from 'react';
import { UpdateItemProps } from '../models/updates';


export class UpdateItem extends PureComponent<UpdateItemProps> {
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