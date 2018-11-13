import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './about.css'
class About extends React.Component{
  constructor(){
    super();
	 this.state={
       imagesrc:require('./images/program.png'),
       item1:['Reverse Engineering','Stegnography','Shells','Linux']
      };
      this.changetopunk = this.changetopunk.bind(this);
      this.changetoweb = this.changetoweb.bind(this);
      this.changetogame = this.changetogame.bind(this);
      this.changetoprogram = this.changetoprogram.bind(this);
   }
   changetopunk(e){
    this.setState({
      imagesrc:require('./images/cyberpunk.jpg'),
    })
   }
   changetoweb(e){
    this.setState({
      imagesrc:require('./images/web.jpg'),
    })
   }
   changetoprogram(e){
    this.setState({
      imagesrc:require('./images/program.png'),
    })
   }
   changetogame(e){
    this.setState({
      imagesrc:require('./images/GameDeveloper.jpg'),
    })
   }
   
  render(){
		return(

  <div class="isfullh">
 
   <div class="row">
      <div class="col s12 center-align inconsolate">
      <h1 style={{color:'white',outline:'none'}}><b>About</b></h1>
      </div>
  </div>
  <div class="row">
      <div class="col s12 m3 l3 xl3 center "><button class="button ubuntu" onMouseOver={this.changetopunk} style={{background:'transparent',color:'white',height:'70px',fontSize:'26px'}}>CyberPunk</button></div>
      <div class="col s12 m3 l3 xl3 center"><button class="button ubuntu" onMouseOver={this.changetoprogram} style={{background:'transparent',color:'white',height:'70px',fontSize:'26px'}}>Programmer</button></div>
      <div class="col s12 m3 l3 xl3 center"><button class="button ubuntu" onMouseOver={this.changetoweb} style={{background:'transparent',color:'white',height:'70px',fontSize:'26px'}}>WebMaster</button></div>
      <div class="col s12 m3 l3 xl3 center"><button class="button ubuntu" onMouseOver={this.changetogame} style={{background:'transparent',color:'white',height:'70px',fontSize:'26px'}}>GameDeveloper</button></div>
  </div>
 
 <img src={this.state.imagesrc}/>
 </div>

			);
		}
}


export default About