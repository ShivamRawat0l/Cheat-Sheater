import React, { Component } from 'react';
import index from './static/index.js';
import add from './static/add.js';
import syntax from './static/syntax.js'
import watchmain from './static/watchmain.js'
import {BrowserRouter,Route} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path="/add" component={add} exact/>
        <Route path="/add/syntax" component={syntax} exact/>
          <Route path="/" component={index} exact/>
          <Route path="/watch/watchmain" component={watchmain} exact />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
