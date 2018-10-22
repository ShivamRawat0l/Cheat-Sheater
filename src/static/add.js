import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import store from './store/index'
import {loadState} from './store/localstorage'
class add extends Component{
	constructor(){
		super()
			this.state={
			users:loadState()
		}
	}
	render(){
		return(
		<div>
		{this.state.users?
			<div class="row "  >
				<div class="col s12 m6 l6 xl6  isfullh valign-wrapper thisisleft usealrichfonts">
					<div class="ishalfw center">
						<NavLink to="/add/syntax" exact activeStyle={
							{color:'inherit'}
						}><div>Syntax</div></NavLink>
	
						</div>
				</div>
				<div class="col s12 m6 l6 xl6 isfullh valign-wrapper thisisright usealrichfonts" style={{textDecoration: 'none', color:'white' }}>
					<div class="ishalfw" >
						<NavLink to="/add/terminology"><div class="center" style={{color:'black'}}>Jargons</div></NavLink>
					</div>
				</div>
			</div>:
			<div>
			
			<h1 class="ubuntu center">YOU NEED TO LOGIN</h1>
			<div class="row center">
			<div class="center">
			<NavLink to="/login"><div class="btn">Click to login</div></NavLink>
			</div>
			</div>
			</div>
		}
		</div>
		);
	}
}
const align={
	backgroundColor:'red',
	textAlign:'right',
	fontSize:'60px',
}
export default add;