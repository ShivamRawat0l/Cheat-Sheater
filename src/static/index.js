import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import firebase,{auth} from './firebase'
import store from './store/index'
import {loadState,deleteit} from './store/localstorage'
class index extends Component {
  constructor(){
    super();
      var quotes=["No man has a good enough memory to be a successful liar.",
                  "If you tell the truth, you don't have to remember anything.",
                  "Don’t wish it were easier; wish you were better",
                  "People have an annoying habit of remembering things they shouldn't.",
                  "A clear conscience is the sure sign of a bad memory.",
                  "One lives in the hope of becoming a memory.",
                  "There are no shortcuts to any place worth going",
                  "God gave us memory so that we might have roses in December.",
                  "Blessed are the forgetful, for they get the better even of their blunders.",
                  "Most everything you think you know about me is nothing more than memories.",
                  "There are memories I am better off without. Things better lost forever.",
                  "There are no traffic jams on the extra mile",
                  "The town was paper, but the memories were not.",
                  "Die with memories, not dreams.",
                  "What we think, we become.",
                  "Yesterday you said tomorrow. Just do it. ",
                  "Try to be a rainbow in someone’s cloud. ",
                  "Happiness depends upon ourselves.",
                  "I have nothing to lose but something to gain.",
                  "All limitations are self-imposed. "]
  var authors=[" Abraham Lincoln","Mark Twain","Jim Rohn","Christopher Paolini","Mark Twain","Antonio Porchia ","Beverly Sills",
                " J.M. Barrie "," Friedrich Nietzsche ","Haruki Murakami"," S.J. Watson","Zig Ziglar","John Green","Unknown",
                "Buddha","Nike","Maya Angelou","Aristotle","Eminem ","Oliver Wendell Holmes"]
  var ran=Math.floor(Math.random()*quotes.length);
    this.state={
    quote:quotes[ran],
    auth:authors[ran],
    users: loadState()
    }
    this.logout=this.logout.bind(this)
  }

    logout(){
    auth.signOut().then(()=>{

      store.dispatch({type:'del',payload:'all'})
      deleteit();
      this.setState({
      quote:this.state.quote,
      auth:this.state.auth,
      users: loadState()
      })
      console.log(store.getState())
      
    })
  }
  render() {

    return (
      <div class="isfullh" style={back}>
      <nav class="N/A transparent z-depth-0">
      <div class="navbar-wrapper">
         <ul class="right hide-on-mid usehifonts">
            <li><NavLink to="/" style={{color:'white'}}>Home</NavLink></li>
            <li><NavLink to="/watch" style={{color:'white'}}>Read</NavLink></li>
            <li><NavLink to="/add" style={{color:'white'}}>Add</NavLink></li>
        {
          this.state.users? 
          <li><NavLink to="/" style={{color:'white'}} onClick={this.logout}>Logout</NavLink></li>:
            <li><NavLink to="/login" style={{color:'white'}}>Login</NavLink></li>
          }
            <li><NavLink to="/about" style={{color:'white'}}>About</NavLink></li>
            <li><NavLink to="/contact" style={{color:'white'}}>Contact</NavLink></li>
            <li><NavLink to="/help" style={{color:'white'}}>Help</NavLink></li>
          </ul>
      </div>
      </nav>
      <div class="row"></div>
      <div class="row"></div>
     
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="center-align row useopenfonts container " style={quoted}>
       " {this.state.quote} "
      </div>
      <div class="useopenfonts " style={authored}>
      -{this.state.auth}
      </div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row">

      <div class="col s12 center-align" style={{position:'absolute',bottom:'100px',color:'black'}}>
         <a href="https://www.youtube.com" style={{color:'white',fontSize:'30px',position:'absolute',bottom:'-25px'}}><i title="info" class="fas fa-info-circle"></i></a>
      </div>
      </div>
      </div>
    );
  }
}
const back={

  backgroundImage: 'url(' + require('./images/back.jpg') + ')' ,
  backgroundSize:'cover'
}
const quoted={
  fontSize:'36px',
  color:'white'
}
const authored={
  fontSize:'25px',
  position:'absolute',
  right:'60px',
  color:'white'
}
export default index;
