import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class watchmain extends Component{
	constructor(){
		super();
		this.state={
			html:[
					{heading:"some",syntax:"syntax",exp:"Explaination"},
					{heading:"heading",syntax:"syntax",exp:"Explaination"},
					{heading:"heading",syntax:"syntax",exp:"Explaination"},
					{heading:"heading",syntax:"syntax",exp:"Explaination"}
			]
		}
	}

	render(){
		const html1 = this.state.html.map(html=>{
		return (
		
				<div>heading :{html.heading}</div>
			
			)
		})
		return(
				<div>{html1}</div>
		);
	}
}
export default watchmain