import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from './firebase.js'
class help extends Component{
	constructor(){
		super()
		this.addtodatabase=this.addtodatabase.bind(this)
	}

	addtodatabase(e){
		e.preventDefault();
		var obj={
			Query:this.refs.helpme.value
		}
		firebase.database().ref('Suggestion').push(obj)
		this.refs.helpme.value=""
		alert('Sent')
	}
	render()
	{
		return(
			
			<div  class="isfullh" >
			  <nav class="N/A transparent z-depth-0">
      <div class="navbar-wrapper">
         <ul class="right hide-on-mid usehifonts">
            <li class="col s2 center"><NavLink to="/" style={{color:'black'}}>Home</NavLink></li>
            <li><NavLink to="/add" style={{color:'black'}}>Add</NavLink></li>
            <li><NavLink to="/watch" style={{color:'black'}}>Read</NavLink></li>
            <li><NavLink to="/about" style={{color:'black'}}>About</NavLink></li>
            <li><NavLink to="/contact" style={{color:'black'}}>Contact</NavLink></li>
            <li><NavLink to="/help" style={{color:'black'}}>Help</NavLink></li>
          </ul>
      </div>
      </nav>
				<div class="container">
					<div class="center roboto" style={{fontSize:'60px'}}><b><u>How to use</u></b></div>
					<div class="row"></div>
					<div class="nunito" style={{fontSize:'18px'}}>
					<div>1. This website basically will collect information on programming and save it like cheat sheets  </div>
					<div>2. To add your own commands and syntax for a perticular language go to the add tab in navbar</div>
					<div>3. Choose if you want to add a syntax or a term using in that programming </div>
					<div>4. Input the syntax and give the explaination.In the reference box input the language from the language that is suggested</div>
					<div>5. If the programming language option is not available input it in the query box below</div>
					<div>6. Your syntax is saved and the same process is for the terminology</div>
					<div>7. To watch the whole cheat sheet just go to the watch nav bar and choose the language you want to see</div>
					<div>8. You can input in the search bar if you want some specific results. Do not use any special character.s </div>
					<div>9. If the output is NULL NULL it means that their is nothing right now </div>
					<div>10. Any suggestion or help required write it down below</div>
					<div>11. Click the info icon in the home page for video tutorial</div>
				</div>
				</div>
				<div class="row"></div>
				<form class="container" onSubmit={this.addtodatabase}>				<input ref='helpme'  placeholder='Name and Query' class="changetoblack col s12 m12 l12 xl12"/>
				<div class="row"></div>
				<div class="center"><button class="btn center">Send</button></div></form>
				</div>	
		
			)
	}
}
export default help