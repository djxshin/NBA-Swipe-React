import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Card from './Components/Card';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ChosenCard" component={Card} />
      </Switch>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
