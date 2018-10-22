import {createStore} from "redux"
import {loadState,saveState} from './localstorage'
const reducer= function (state,action){
	if(action.type=="user")
	return action.payload	
	else if(action.type=="del")
	return false
}


const previous = loadState()
const store = createStore(reducer,
		previous,
	  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store)
export default store; 