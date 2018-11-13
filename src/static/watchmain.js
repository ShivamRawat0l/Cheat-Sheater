import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from './firebase.js'
import store from './store/index'
import {loadState} from './store/localstorage'
import M from 'materialize-css'
import $ from 'jquery'
class watchmain extends Component{

	constructor(props){

		super(props);

		var a;
		var languagelist=[],main=[],second=[];
		this.state={
			mainlist:[],
			secondlist:[],
			search:RegExp('.*','gmi'),
			users:loadState(),
			arethese:false
		}
	  firebase.database().ref(this.props.match.params.language).once('value', (snapshot)=> {
		var a=snapshot.val();
		if(a==null){
			this.setState({
				arethese:true
			})
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
 	})
 	);
    

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
	componentDidMount(){
		M.AutoInit()
	}
	render(){

		const main=this.state.mainlist.map(syn=>{

			if(this.state.search.test(syn[0])||this.state.search.test(syn[1]))
			return <li>
      <div className="collapsible-header indigo darken-4 " style={{'color':'white'}}>{syn[0]}</div>
      <div className="collapsible-body indigo lighten-4" ><span>{syn[1]}</span></div>
    </li>
		})
		
		const second=this.state.secondlist.map(syn=>{
			if(this.state.search.test(syn[0])||this.state.search.test(syn[1]))
			return<li>
      <div className="collapsible-header indigo darken-4 " style={{'color':'white'}}>{syn[0]}</div>
      <div className="collapsible-body indigo lighten-4" ><span>{syn[1]}</span></div>
    </li>
		})
		if(this.state.arethese== true){second.push(<h4 class="center">Its looks empty</h4>)}
		if(main.length==0 && second.length==0 ){main.push(<h4 class="center"><div class="progress">
      <div class="indeterminate"></div> </div></h4>)}


		return (
		<div >
<div>
		
        
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
<div class="container row ">
<ul className="collapsible" >
{main}
</ul>
</div>
<div class="container row ">
	<ul class="collapsible" style={{'borderRadius':'20px','border':'transparent'}}>
   			{second}	
	</ul>
</div>
</div>
		</div>

		)};
}

export default watchmain