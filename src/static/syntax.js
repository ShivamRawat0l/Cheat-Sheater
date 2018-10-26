import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
import firebase from './firebase.js'
import store from './store/index'
import {loadState} from './store/localstorage'

class syntax extends Component{
	constructor(){
		super();
		this.handlesubmit=this.handlesubmit.bind(this);
		this.state={
			users:loadState()
		}
	}
	handlesubmit(e){

		if(this.refs.language.value=="C++"||
			this.refs.language.value=="Java"||
			this.refs.language.value=="Javascript"||
			this.refs.language.value=="Html"||
			this.refs.language.value=="React"||
			this.refs.language.value=="Python"||
			this.refs.language.value=="Linux"||
			this.refs.language.value=="C"||
			this.refs.language.value=="Unity"||
			this.refs.language.value=="Node"||
			this.refs.language.value=="Csharp"||
			this.refs.language.value=="Css"||
			this.refs.language.value=="Linux"||
			this.refs.language.value=="Angular"||
			this.refs.language.value=="Flutter"||
			this.refs.language.value=="Debian"||
			this.refs.language.value=="Git"||
			this.refs.language.value=="Django"||
			this.refs.language.value=="Php"||
			this.refs.language.value=="Firebase"||
			this.refs.language.value=="Mongodb"||
			this.refs.language.value=="Mysql"||
			this.refs.language.value=="Jquery"){
			e.preventDefault();
	 		var item={
			syntax:this.refs.syntaxin.value,
			explain:this.refs.explainin.value,
			type:'syntax'
			};
			const itemRefs=firebase.database().ref("/"+this.refs.language.value);
			itemRefs.push(item);
			this.refs.syntaxin.value=''
			this.refs.explainin.value=''
			document.querySelector('.saved').innerHTML="SAVED";
			setTimeout(()=>document.querySelector('.saved').innerHTML="",2000);
		}
		else{
			alert("Choose language from valid option or request the admin to add the option ('C++,Java,Html,Javascript,Python,React,Linux,C,Unity,Node,Csharp,Css,Linux,Angular,Flutter,Django,Git,Php,Firebase,Mysql,Mongodb,Jquery')")
		}
	}
	render(){console.log('I was triggered during render');
		return(
<div class="isfullh makeaimage grey lighten-3">
{this.state.users?
<div>
		      <nav class="N/A transparent z-depth-0">
      <div class="navbar-wrapper">
         <ul class="right hide-on-mid usehifonts">
            <li><NavLink to="/" style={{color:'black'}}>Home</NavLink></li>
            <li><NavLink to="/add" style={{color:'black'}}>Add</NavLink></li>
            <li><NavLink to="/watch" style={{color:'black'}}>Read</NavLink></li>
            <li><NavLink to="/about" style={{color:'black'}}>About</NavLink></li>
            <li><NavLink to="/contact" style={{color:'black'}}>Contact</NavLink></li>
            <li><NavLink to="/help" style={{color:'black'}}>Help</NavLink></li>
          </ul>
      </div>
      </nav>
			<div class="container">
	
		
			<div class="row">
				<h1 class="center usealrichfonts">Syntax</h1>
			</div>
			<form onSubmit={this.handlesubmit}>
			<div class="row">
				<input class="text col s6  changetoblack" placeholder="Syntax" ref='syntaxin'/>
				<input id="color" class="col s4 right changetoblack" list="suggestions" placeholder="Reference" ref='language'/>
					<datalist id="suggestions">
    					<option value="C++"/>
    					<option value="Java"/>
    					<option value="Html"/>
    					<option value="Javascript"/>
    					<option value="React"/>
    					<option value="Python"/>
    					<option value="Linux"/>
    					<option value="C"/>
    					<option value="Unity"/>
    					<option value="Node"/>
    					<option value="Csharp"/>
    					<option value="Css"/>
    					<option value="Gnu"/>
    					<option value="Angular"/>
    					<option value="Flutter"/>
    					<option value="Debian"/>
    					<option value="Django"/>
    					<option value="Git"/>
    					<option value="Php"/>
    					<option value="Firebase"/>
    					<option value="Mysql"/>
    					<option value="Mongodb"/>
    					<option value="Jquery"/>
					</datalist>

			</div>
			<div class="row">
			<textarea id="textarea2" class="materialize-textarea changetoblack col s12 m12 l12 xl12 " placeholder="Explaination" ref='explainin' style={{height:'8rem'}} ></textarea>
			</div>
			<div class="row"></div>
			<div class="row ">
			<div class="col s12 right" style={{textAlign:'center',margin:'auto',flex:'1',alignItems: 'center'}}>
			<button class="btn left s6 z-depth-4 grey lighten-3 " style={{color:'black'}}><i class="fas fa-save" style={{color:'black'}}></i>   Save</button> 
			</div>
			</div>
			</form>
			
			<div class="row center">
					<div class="col s3 center black saved" style={{color:"white"}}></div>
			</div>
			</div>
			</div>:	<div>
			
			<h1 class="ubuntu center">YOU NEED TO LOGIN</h1>
			<div class="row center">
			<div class="center">
			<NavLink to="/login"><div class="btn">Click to login</div></NavLink>
			</div>
			</div>
			</div>}
			
</div>
			);
	}
}
export default syntax;