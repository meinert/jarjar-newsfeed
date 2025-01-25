import React, { PureComponent } from 'react';
import { UpdateItemProps as xx } from '../models/updates';
interface UpdateItemProps {
  // key: number;
  update: xx;
}

export class UpdateItem extends PureComponent<UpdateItemProps> {
  constructor(props) {
    super(props);

    console.log('UpdateItem - App props:', props);
  }
  
  render() {
    const { by, text, imageSrc, created } = this.props.update;
    return (
      <div key={this.props.update.id}>
        <h3>{by}</h3>
        <p>{text}</p>
        {/* Subcomponent will use imageSrc and created later */}
      </div>
    );
  }
}