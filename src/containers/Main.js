import React from 'react';
import gs from 'react-gs';
import Radium from 'radium';
import { RouteHandler } from 'react-router';

@Radium
export default class Main extends React.Component{
  render(){
    return (
      <div style={[styles, gs.ta.center, gs.ff.sanSerif]}>
        <RouteHandler {...this.props}/>
      </div>
    )
  }
}

let styles = {
    display: 'flex'
}
