
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {
  c='sangita';
  render() {
  
    return (

      <div>
        <div className="container">
        <h1>hi this is my first class based component practice tutorial {this.c}</h1>
        <NavBar/>
        <News pageSize={5}/>
        </div>
        
      </div>
    )
  }
}


