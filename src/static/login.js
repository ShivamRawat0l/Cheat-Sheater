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
		    <nav class="white z-depth-5 hide-on-small-only" style={{opacity:'0.95'}}>

      <div class="navbar-wrapper ">
         <NavLink to="/" class="center brand-logo" style={{color:'black',fontWeight:'bold'}}>CHEAT-SHEET</NavLink>
         <ul class=" nunito">
            <li><NavLink to="/" style={{color:'black'}}>Home</NavLink></li>
            <li><NavLink to="/watch" style={{color:'black'}}>Read</NavLink></li>
            <li><NavLink to="/add" style={{color:'black'}}>Add</NavLink></li>

            <li><NavLink to="/about" style={{color:'black'}}>About</NavLink></li>

            <li ><NavLink to="/help" class="btn purple darken-3" style={{color:'white'}}>Getting Started</NavLink></li>
          </ul>
          <ul class="right hide-on-mid nunito">
                  {
          this.state.users? 
          <li><NavLink to="/" style={{color:'black'}} onClick={this.logout}>Logout   </NavLink></li>:
            <li><NavLink to="/login" style={{color:'black'}}>Login   </NavLink></li>

          }
           <li><NavLink to="/updates" style={{color:'black'}}>Updates</NavLink></li>
          </ul>
      </div>

      </nav>
}
		 <div class="row "></div>
		 <div class="row "></div>
		 <div class="row "></div>
		 <div class="row "></div>
		 <div class="row "></div>

		{
			this.state.users?

			<div class="row">
			<div class="center">

			<button  onClick={this.logout} class="waves-effect waves-light btn"><i class="fab fa-google"></i>  Logout</button>
		
			</div>
			</div>
			:
			
			<div class="row ">
			<div class="center">
			<button onClick={this.login} class="waves-effect waves-light btn"><i class="fab fa-google"></i>  Login With Google</button>
		
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