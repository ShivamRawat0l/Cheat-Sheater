import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class index extends Component {
  render() {
    return (
      <nav class="purple darken-4">
      <div class="navbar-wrapper">
        <div class="navbar-brand"></div>
         <ul class="right hide-on-mid">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">Add</NavLink></li>
            <li><NavLink to="/watch/watchmain">Watch</NavLink></li>
            <li><NavLink to="/add">About</NavLink></li>
            <li><NavLink to="/add">Contact</NavLink></li>
          </ul>
      
      </div>
      </nav>
    );
  }
}

export default index;
