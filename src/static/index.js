import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import firebase,{auth,provider} from './firebase'
import store from './store/index.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {loadState,saveState,deleteit} from './store/localstorage'
import M from 'materialize-css'
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
    users: loadState(),
    hover:false,
    }
    this.login=this.login.bind(this)
    this.logout=this.logout.bind(this)

  }

    logout(){
    auth.signOut().then(()=>{

      store.dispatch({type:'del',payload:'all'})
      deleteit();
      this.setState({
      quote:this.state.quote,
      auth:this.state.auth,
      users: loadState(),
          hover:false,
      })
      console.log(store.getState())
      
    })
  }
  login(){
    auth.signInWithPopup(provider)
    .then((result)=>{
      const user=result.user;
      store.dispatch({type:'user',payload:user})
      saveState(store.getState())
      this.setState({
        users:loadState()
      })
  
      console.log(store.getState())
  
    })
  }
 
    componentDidMount(){

    this.setState({
      users:loadState(),
    })
    console.log(this.state)
  }
  render() {

    return (
      <div className="isfullh" style={back}>

      <div class="row"></div>
      <div class="row"></div>
     
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="white container z-depth-5 "  style={mainquote} >
      <div class="center-align row roboto container " style={quoted}>
       "{this.state.quote}"
      </div>
      <div class="roboto center" style={authored}>
      -{this.state.auth}
      </div>
      </div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row">

      <div class="col s12 center-align" style={{marginTop:'20px',fontSize:'30px',color:'white'}}>
         <a href="https://www.youtube.com" className={"link"} ><i title="info" style={{color:'white'}} class="fas fa-info-circle"></i></a>
      </div>
      </div>
      </div>
    );
  }
}
const back={

  backgroundImage: 'url(' + require('./images/back.jpg') + ')' ,
  backgroundSize:'cover',
  backgroundRepeat:'repeat'
}
const quoted={
  fontSize:'46px',
  color:'black ',
  fontWeight:'bold'
}
const authored={
  fontSize:'32px',
  position:'relative',
  color:'black',
}
const mainquote={
  paddingTop:'30px',
    borderRadius:'10px',
  opacity:'0.9',
  paddingBottom:'30px',
}

export default index;
