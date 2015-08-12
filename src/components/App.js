import React from 'react';
import gs from 'react-gs';
import Radium from 'radium';
import { Link } from 'react-router';

console.log(gs);

@Radium
export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        text: 'Is our QA environment up?'
    }
  }
  handleClick() {
    let responses = [
        'Nope', 
        "Yes, but I haven't Pushed", 
        'Running a build now',
        'Rolling back right now',
        'We have a few issues reported',
        'FYI getting 500s on QA right now',
        'Which QA environment?',
        "Builds Failing",
        "No Content",
        "Smoke Test Fails",
        "Please follow Up with DBA Team",
        "Getting Redirect",
        "I believe it is a cache issue",
        "I applied the change Yesterday no sure if it has been Deployed"
    ];
    this.setState({text: responses[Math.floor(Math.random()*responses.length)]})
  }
  render () {
    return ( 
        <div style={[styles.root]}>
            <p onClick={this.handleClick.bind(this)} style={[styles.text, gs.fs.xxLarge, gs.ta.center]}>{this.state.text}</p>
        </div>
    )
  }
}

let styles = {
    root: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        ':hover': {
            cursor: 'pointer',
            color: '#4C81F4'
        }
    }
}
