import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom'
class add extends Component{
	render(){
		return(
		<div>
			<div class="row">
				<div class="col s4 center"><NavLink to="/add/syntax">Syntax</NavLink></div>
				<div class="col s4 center">Terminology</div>
				<div class="col s4 center">Something</div>
			</div>
		</div>
		);
	}
}

export default add;