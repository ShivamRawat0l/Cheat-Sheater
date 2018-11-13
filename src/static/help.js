import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from './firebase.js'
import store from './store/index'
import {createStore} from 'redux'
import {loadState,saveState,deleteit} from './store/localstorage'
class help extends Component{
	constructor(){
		super()
		this.state={
			users:store.getState()
		}
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
			<div style={back} >
			<div class="row"></div>
				<div class="container white z-depth-3" style={{borderRadius:'10px',opacity:'0.95'}}>
					<div class="center roboto left" style={{fontSize:'60px',paddingLeft:'30px'}}><b>Getting Started</b></div>
					<div class="row">
						<div class="col s12 l12 m12 ">
						Cheat Sheet is a approach to make learning easy as we all know that when we learn something we tend 
						forget is as we learn something else and then re-reading the documetation or watching tutorial is time 
						consuming. Now you have the power to share anything new you learn and read what other people have learned.
						It basically creates cheat-sheet but with more details.
					</div></div>
						<div class="center roboto left" style={{fontSize:'54px',paddingLeft:'30px'}}><b>   Why Cheat Sheet ? </b></div>
					<div class="row">
						<div class="col s12 l12 m12 ">
						Whenever you learn something new you are only able to remember it only for a short span of time and then we forget
						it and then just to find that topic it consumes a lot of time. You can have cheat sheet created by experts but you cannot
						search through them and it mostly contains jargon. Cheat sheet is just like <b>DEMOCRACY.
						  Cheat-Sheet is for the people,to the people, from the people. </b>
					</div></div>

					<div class="center roboto left" style={{fontSize:'54px',paddingLeft:'30px'}}><b>Efficiency</b></div>
					<div class="row">
						<div class="col s12 l12 m12 ">
						Suppose you are learning something. <b>Don't</b> add something to the site while learning.<b>Don't</b> add something when
						you are not sure that the thing you are adding is right or wrong.<b>Do </b> add when you are sure about things you are adding.
						When learning something just try to learn that thing as much you can for that session and after the session is over than add 
						everything that you have learned. This habit will ensure you are adding right stuff and it would revise your conecpt and it will 
						make you time efficient as adding something everytime you read something new will take a long time.

					</div></div>

					<div class="center roboto left" style={{fontSize:'54px',paddingLeft:'30px'}}><b>Support</b></div>
					<div class="row">
						<div class="col s12 l12 m12 ">
							You can write your suggetion below or email me at cheatsheetinc@gmail.com
					</div></div>
					<form onSubmit={this.addtodatabase} style={{paddingLeft:'20%'}}><div class="row">
					<input ref='helpme'  placeholder='Suggestions '  class="changetoblack center col s12 m7 l7 xl7 "/>
					<button class="btn  center col s6 l2 m2 xl2 purple darken-3">Send</button>
					</div>
					</form>
				</div>
			
				</div>	</div>	
		
			)
	}
}
const back={

  backgroundImage: 'url(' + require('./images/backhelp.jpg') + ')' ,
  backgroundSize:'cover'
}
export default help