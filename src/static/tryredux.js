import store from './store/index.js'
import React,{Component} from 'react'
class tryredux extends Component{
		constructor(){
		super()
		store.dispatch({type:'user',payload:'user'})
		console.log(store.getState())
	}
		render(){
			return (<div>asd</div>)
		}
}
export default tryredux
