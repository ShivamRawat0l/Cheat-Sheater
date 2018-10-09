import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
import firebase from './firebase.js'
class syntax extends Component{
	constructor(){
		super();
		this.handlesubmit=this.handlesubmit.bind(this);

	}
	handlesubmit(e){
		e.preventDefault();
	 var item={
			syntax:this.refs.syntaxin.value,
			explain:this.refs.explainin.value,
		};
		const itemRefs=firebase.database().ref("/"+this.refs.language.value);
		itemRefs.push(item);
		this.refs.syntaxin.value=''
		this.refs.explainin.value=''
	}
	render(){console.log('I was triggered during render');
		return(

			<div class="container">
			<div class="row">
				<h1 class="center">Syntax</h1>
			</div>
			<form onSubmit={this.handlesubmit}>
			<div class="row">
				<input class="text col s7" placeholder="Syntax" ref='syntaxin'/>
				<input id="color" class="col s4 right" list="suggestions" placeholder="Reference" ref='language'/>
					<datalist id="suggestions">
    					<option value="C++"/>
    					<option value="Java"/>
    					<option value="Html"/>
    					<option value="Javascript"/>
    					<option value="React"/>
    					<option value="Python"/>
    					<option value="Linux"/>
    					<option value="C"/>

					</datalist>
			</div>
				<textarea id="textarea2" class="materialize-textarea large lg" placeholder="Explaination" ref='explainin' ></textarea>
			<div class="row center"></div>
			<div class="row center">
			<button class="btn center">Save</button> 
			</div>
			</form>
			</div>
			);
	}
}
export default syntax;