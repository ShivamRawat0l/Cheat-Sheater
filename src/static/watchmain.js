import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from './firebase.js'
class watchmain extends Component{

	constructor(){
		super();
		var a;
		var synlist=[],explainlist=[],languagelist=[];
		const itemrefs=firebase.database().ref('Html');
		this.state={
			syntax:[]
		}
	  firebase.database().ref("Html").once('value',function (snapshot) {
		var a=snapshot.val();
        const keys=Object.keys(a);
        for(let i=0;i<keys.length;i++)
        {
      
        			synlist.push(a[keys[i]].syntax);
        }
    	}).then(()=>
 	this.setState({
 		syntax:synlist,
 	}));

	}

	render(){
	
		return (
		<div>
			<div>heading :{this.state.syntax[0]}</div>
		</div>
		)};
}
export default watchmain