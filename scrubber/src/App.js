import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Wrapper from "./components/Wrapper"
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Saved from './components/Saved/Saved'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Wrapper>
          <Header />
          <br />
          <Search />
          <br />
          <Results />
          <br />
          <Saved />
          <br />
        </Wrapper>   
      </div>
    )
  }
}

export default App;
