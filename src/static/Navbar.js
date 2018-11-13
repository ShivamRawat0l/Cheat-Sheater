import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import firebase,{auth,provider} from './firebase'
import store from './store/index.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {loadState,saveState,deleteit} from './store/localstorage'
import M from 'materialize-css'
class navbar extends Component{
	constructor(){
		super()
		   this.state={
    users: loadState(),
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
		 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  })
    this.setState({
      users:loadState(),
    })
    console.log(this.state)
  }
	
	render(){
		return(
		<React.Fragment>
 <nav className="white z-depth-5 hide-on-small-only isfullw" style={{opacity:'0.95'}}>

      <div class="navbar-wrapper ">
         <NavLink to="/" class="center brand-logo hide-on-med-and-down" style={{color:'black',fontWeight:'bold'}}>CHEAT-SHEET</NavLink>
         <ul className=" nunito">
            <li><NavLink to="/" style={{color:'black'}}>Home</NavLink></li>
            <li><NavLink to="/watch" style={{color:'black'}}>Read</NavLink></li>
            <li><NavLink to="/add" style={{color:'black'}}>Add</NavLink></li>

            <li><NavLink to="/about" style={{color:'black'}}>About</NavLink></li>

            <li ><NavLink to="/help" className="btn purple darken-3" style={{color:'white'}}>Getting Started</NavLink></li>
          </ul>
          <ul className="right  nunito">
                     <li class="hide-on-med-only"><NavLink to="/updates" style={{color:'black'}}>Updates</NavLink></li>
                  {
          this.state.users? 
          <li  style={{color:'black',cursor:'pointer',marginRight:'15px'}} onClick={this.logout}>Logout</li>:<React.Fragment>
            <li class="hide-on-med-only" style={{color:'black',marginRight:'20px'}}>Login with </li>
            <li onClick={this.login} style={{cursor:'pointer'}}> <i  class="valign-center" style={{marginTop:'15px',marginRight:'15px',color:'red',fontSize:'30px'}} class="fab fa-google-plus"></i></li>
           <li onClick={this.login} style={{cursor:'pointer'}}> <i  class="valign-center" style={{marginTop:'15px',marginRight:'15px',color:'blue',fontSize:'30px'}} class="fab fa-facebook-square"></i></li>
             <li onClick={this.login} style={{cursor:'pointer'}}> <i  class="valign-center" style={{marginTop:'15px',marginRight:'15px',color:'black',fontSize:'30px'}} class="fab fa-github"></i></li>
            <li> </li>
</React.Fragment>
          }

          </ul>
      </div>

  </nav>

      <nav class="hide-on-med-and-up " style={{backgroundColor:'#240446'}}>
 <ul id="slide-out" class="sidenav nunito">
  <li><div class="divider"></div></li>
               <li><NavLink to="/" style={{color:'black'}}>Home</NavLink></li>
            <li><NavLink to="/watch" style={{color:'black'}}>Read</NavLink></li>
            <li><NavLink to="/add" style={{color:'black'}}>Add</NavLink></li>
            <li><NavLink to="/about" style={{color:'black'}}>About</NavLink></li>
             <li ><NavLink to="/help" style={{color:'black'}}>Getting Started</NavLink></li>
                {
          this.state.users? 
          <li><NavLink to="/" style={{color:'black'}} onClick={this.logout}>Logout   </NavLink></li>:
            <li><NavLink to="/login" style={{color:'black'}}>Login   </NavLink></li>
          }
           <li><NavLink to="/updates" style={{color:'black'}}>Updates</NavLink></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger" onClick={this.caller}>MENU</a> 
    </nav>
    		</React.Fragment>
			)
	}
}
export default navbar