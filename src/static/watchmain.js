import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from './firebase.js'
import store from './store/index'
import {loadState} from './store/localstorage'

class watchmain extends Component{

	constructor(props){

		super(props);

		var a;
		var languagelist=[],main=[],second=[];
		this.state={
			mainlist:[],
			secondlist:[],
			search:RegExp('.*','gmi'),
			users:loadState()
		}
	  firebase.database().ref(this.props.match.params.language).once('value',function (snapshot) {
		var a=snapshot.val();
		if(a==null){
			
		}
	else{
        const keys=Object.keys(a);
        console.log(a[keys[0]])
        for(let i=0;i<keys.length;i++)
        {	
     
        	if(a[keys[i]].type=='syntax'){	
        	main.push(
        			[
        			a[keys[i]].syntax,
        			a[keys[i]].explain
        			]
        			);
        	}
        	else{
        		second.push(
        			[
        				a[keys[i]].syntax,
        				a[keys[i]].explain
        			]
        			);
        	}

        }
    	}
    }).then(()=>
 	this.setState({
 		mainlist:main,
 		secondlist:second,
 		search:RegExp('.*','gmi'),


 	}));
    

    this.changeit=this.changeit.bind(this)
	}
	changeit(e){
	if(RegExp('\\W+','gmi').test(this.refs.expression.value)&& this.refs.expression.value!=' '){
			alert("Don't use any special characters. Use digits or characters only")
			this.refs.expression.value=""
	}

		else{
		if(this.refs.expression.value==null){
			this.setState({
				search:RegExp('.*','gmi')
			})
		}
		else{
			this.setState({
				search:RegExp(this.refs.expression.value,'gmi')
			})
		}
	}
			
	}

	render(){
		const main=this.state.mainlist.map(syn=>{

			if(this.state.search.test(syn[0])||this.state.search.test(syn[1]))
			return<tr> <td class="sourcecode"> {syn[0]}  </td> <td>{syn[1]}</td></tr>
		})
		const second=this.state.secondlist.map(syn=>{
			if(this.state.search.test(syn[0])||this.state.search.test(syn[1]))
			return<tr> <td> {syn[0]}  </td> <td>{syn[1]}</td></tr>
		})
		if(second.length==0){second.push(<h4 class="center">You need to add something to see something</h4>)}
		if(main.length==0){main.push(<h4 class="center">You need to add something to see something</h4>)}
		return (
		<div>
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
        <div class="row">
      <ul class="tabs" style={{overflow:'hidden'}}>
        <li class="tab col s6"><a href="#test3" class="black-text active">Syntax</a></li>
        <li class="tab col s6"><a href="#test4" class="black-text">Terminology</a></li>
      </ul>

 
  </div>
        
		<div class="row"></div>
		<div class="heading center-align row exo"   style={{fontSize:'46px'}}>
		{this.props.match.params.language}
		</div>
		<div class="row">
		</div>

<div class="row">
<i class="fab fa-searchengin right  col s2 m2 l2 xl2 " style={{fontSize:'26px'}}></i>
	<input  class="col s10 m2 l2 xl2 right" placeholder="Search"  ref='expression' onChange={this.changeit}/>
		
</div>

<div class="container" id="test3">

	<table class="centered" >
        <thead>
          <tr>
              <th>Syntax</th>
              <th>Explanation</th>
          </tr>
        </thead>

        <tbody>
    {main}
        </tbody>
      </table>
	</div>


	<div class="container" id="test4">
	<table class="centered">
        <thead>
          <tr >
              <th>Term</th>
              <th>Explanation</th>
          </tr>
        </thead>

        <tbody>
   			{second}	
        </tbody>
      </table>
	</div>
</div>

		</div>

		)};
}
export default watchmain