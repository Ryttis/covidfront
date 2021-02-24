import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import CovidChart from './components/CovidChart'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <Route path="/" component={CovidChart} exact/>
        <Route path="/:name" component={CovidChart}/>
      </div>
      </Router>
     
    );
  }
}

export default App;
