import React, { Component } from 'react';
import index from './static/index.js';
import add from './static/add.js';
import syntax from './static/syntax.js'
import watchmain from './static/watchmain.js'
import contact from './static/contact.js'
import {BrowserRouter,Route} from 'react-router-dom';
import About from './static/About.js'
import LoadingScreen from 'react-loading-screen'
import watch from './static/watch.js'
import terminology from './static/terminology.js'
import help from './static/help.js'
import login from './static/login.js'
import tryredux from './static/tryredux.js'
class App extends React.Component {

  render() {
  		const baseUrl = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        <div>
        <Route path={baseUrl+"/"} component={index} exact/>
        <Route path="/add" component={add} exact/>
        <Route path="/add/syntax" component={syntax} exact/>
        <Route path="/add/terminology" component={terminology} exact/>
		<Route path="/add/terminology" component={terminology} exact/>
        <Route path="/watch/watchmain/:language" refresh="true" component={watchmain} exact />
        <Route path="/watch" component={watch} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={contact} exact />
        <Route path="/help" component={help}  exact/>
        <Route path="/t" component={tryredux}  exact/>
        <Route path="/login" component={login}  exact/>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
