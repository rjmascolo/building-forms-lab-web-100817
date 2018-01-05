import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map((band, i) =><li key={i} >{band}</li>);
    console.log(bands)
    return (
      <div>
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
};

export default Bands;
