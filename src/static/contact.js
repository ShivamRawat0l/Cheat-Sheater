import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './contact.css'
class contact extends Component{
	render(){
		return(
			      <div class="isfullh setbackcontact useopenfonts">
      <nav class="N/A transparent z-depth-0">
      <div class="row">
      <div class="navbar-wrapper ">
         <ul class="right usehifonts ">
            <li class="col s2 center"><NavLink to="/" style={{color:'white'}}>Home</NavLink></li>
            <li><NavLink to="/add" style={{color:'white'}}>Add</NavLink></li>
            <li><NavLink to="/watch" style={{color:'white'}}>Read</NavLink></li>
            <li><NavLink to="/about" style={{color:'white'}}>About</NavLink></li>
            <li><NavLink to="/contact" style={{color:'white'}}>Contact</NavLink></li>
            <li><NavLink to="/help" style={{color:'white'}}>Help</NavLink></li>
          </ul>
      </div>
      </div>
      </nav>
      <div class="roboto center" style={{fontSize:'60px'}}>Links</div>
      <div class="container" style={{fontSize:'20px'}}>
      <div class="row"></div>
      <div class="row ">
      	<div class="col s4 m6 l6 xl6 center-align">Github</div>
      	<div class="col s4 m6 l6 xl6 center-align"><a href="https://cll.press/fKuFiDtS" style={{color:'white'}}>https://cll.press/fKuFiDtS</a></div>
      </div>
            <div class="row">
      	<div class="col s4 m6 l6 xl6 center-align">HackerEarth</div>
      	<div class="col s4 m6 l6 xl6 center-align"><a href="https://cll.press/wzi2Ekk" style={{color:'white'}}>https://cll.press/wzi2Ekk</a></div>
      </div>
            <div class="row">
      	<div class="col s4 m6 l6 xl6 center-align">HackerRank</div>
      	<div class="col s4 m6 l6 xl6 center-align"><a href="https://cll.press/1uOOb65C" style={{color:'white'}}>https://cll.press/1uOOb65C</a></div>
      </div>
            <div class="row">
      	<div class="col s4 m6 l6 xl6 center-align">Facebook</div>
      	<div class="col s4 m6 l6 xl6  center-align"><a href="https://cll.press/Uu0xM3" style={{color:'white'}}>https://cll.press/Uu0xM3</a></div>
      </div>
            <div class="row">
      	<div class="col s4 m6 l6 xl6 center-align">Instagram</div>
      	<div class="col s4 m6 l6 xl6 center-align"><a href="https://cll.press/bEeVO1C" style={{color:'white'}}>https://cll.press/bEeVO1C</a></div>
      </div>
        <div class="row">
      	<div class="col s4 m6 l6 xl6 center-align">Youtube</div>
      	<div class="col s4 m6 l6 xl6 center-align"><a href="https://cll.press/RrakFoc" style={{color:'white'}}>https://cll.press/RrakFoc</a></div>
      </div>

       <div class="row">
      	<div class="col s4 m6 l6 xl6 center-align">Twitter</div>
      	<div class="col s4 m6 l6 xl6 center-align"><a href="https://cll.press/RASce4K" style={{color:'white'}}>https://cll.press/RASce4K</a></div>
      </div>
      </div>
      </div>
			)
	}
}
export default contact