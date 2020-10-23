import React, { Component } from 'react';
import './App.css';
import Header from './Header';



class App extends Component {
  constructor() {
    super();
    this.name = 'Joe';
    this.age = 43;
    this.state = {
      clicked: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {
    this.setState({ clicked: this.state.clicked + 1 })
  }
  render() {
    return (
      <div className="App">
        <div className="container rounded width: 300px height: 500px border border-danger">
          <h1>
            Joe's Blog
        </h1>
          <Header
            text="Testing"
            name={this.name}
            age={this.age}
            musician
            clicked={this.state.clicked}
          />
        </div>
        clicked: {this.state.clicked}
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.clickHandler}
        >click me!
          </button>
      </div>
    );
  }
}

export default App;
