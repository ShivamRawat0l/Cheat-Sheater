import React,{Component} from 'react'
import firebase, {auth,provider} from './firebase.js'
import	{NavLink} from 'react-router-dom'
import store from './store/index.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {loadState,saveState,deleteit} from './store/localstorage'


class login extends Component{

	constructor()
	{
		
		super();


		this.state={
			users:store.getState(),
		}
		this.login=this.login.bind(this)
		this.logout=this.logout.bind(this)
		
	}

	logout(){
		auth.signOut().then(()=>{

			store.dispatch({type:'del',payload:'all'})
			deleteit()
			this.setState({
				users : loadState()
			})
			console.log(store.getState())
			
		})
	}
	login(){
		auth.signInWithPopup(provider)
		.then((result)=>{
			const user=result.user;
			console.log("Workuibg")
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
			users:loadState()
		})
		console.log(this.state)
	}
	render(){
		return(

		
		      <div class="isfullh" style={back}>
		       <nav class="N/A transparent z-depth-0">
      <div class="navbar-wrapper">
         <ul class="right hide-on-mid usehifonts">
            <li><NavLink to="/" style={{color:'black'}}>Home</NavLink></li>
            <li><NavLink to="/watch" style={{color:'black'}}>Read</NavLink></li>
            <li><NavLink to="/add" style={{color:'black'}}>Add</NavLink></li>
        {
          this.state.users? 
          <li><NavLink to="/" style={{color:'black'}} onClick={this.logout}>Logout</NavLink></li>:
            <li><NavLink to="/login" style={{color:'black'}}>Login</NavLink></li>
          }
            <li><NavLink to="/about" style={{color:'black'}}>About</NavLink></li>
            <li><NavLink to="/contact" style={{color:'black'}}>Contact</NavLink></li>
            <li><NavLink to="/help" style={{color:'black'}}>Help</NavLink></li>
          </ul>
      </div>
      </nav>
		 <div class="row "></div>
		 <div class="row "></div>
		 <div class="row "></div>
		 <div class="row "></div>
		 <div class="row "></div>

		{
			this.state.users?

			<div class="row">
			<div class="center">
			<form>
			<button  onClick={this.logout} class="waves-effect waves-light btn"><i class="fab fa-google"></i>  Logout</button>
			</form>
			</div>
			</div>
			:
			
			<div class="row ">
			<div class="center">
			<form >
			<button onSubmit={this.login} class="waves-effect waves-light btn"><i class="fab fa-google"></i>  Login With Google</button>
			</form>
			</div>
			</div>
		}
			</div>

			);
	}
}
const back={

  backgroundImage: 'url(' + require('./images/back12.jpg') + ')' ,
  backgroundSize:'cover'
}
export default login