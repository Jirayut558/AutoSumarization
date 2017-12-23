import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonAppBar from './ButtonAppBar'
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <form onSubmit={this.handleSubmit}>
        <label className="App-header">
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
