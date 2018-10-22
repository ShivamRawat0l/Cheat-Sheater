import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import store from './store/index.js'
import {loadState} from './store/localstorage'
class watch extends Component{
constructor(){
			super()
			this.state={
				users:loadState()
			}

		}
	render(){

		return(
<div class="isfullh">


	<div>
	<div class="row">
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
    </div>
    	
    <div class="row">
        <div class="card col s12 m2 z-depth-5">
        <a href="/watch/watchmain/C++">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/cpp.png')}  style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">C++</span>
      
    		</div>
    	</a>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  				<a href="/watch/watchmain/Csharp">
  		
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/c.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">C</span>
      		
    		</div>
    	</a>
   
  		</div>


  		<div class="card col s12 m2 z-depth-5">
  <a href="/watch/watchmain/Csharp">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/csharp.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">C#</span>
     
    		</div>
</a>
  		</div>

        <div class="card col s12 m2 z-depth-5">
        <a href="/watch/watchmain/Html">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/html5.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Html</span>
    
    		</div>
   		</a>
  		</div>

        <div class="card col s12 m2 z-depth-5">
        <a href="/watch/watchmain/Python">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/python.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Python</span>
      	
    		</div>
    	</a>
  		</div>

        <div class="card col s12 m2 z-depth-5">
        <a href="/watch/watchmain/Java">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/java.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Java</span>

    		</div>
    	</a>
  		</div>

        <div class="card col s12 m2 z-depth-5">
        <a href="/watch/watchmain/Css">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/css.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Css</span>
  
    		</div>
    	</a>
  		</div>


        <div class="card col s12 m2 z-depth-5">
        <a href="/watch/watchmain/Javascript">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/js.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">JavaScript</span>
      	
    		</div>
    	</a>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/React">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/react.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Reactjs</span>
      
    		</div>
    	</a>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Angular">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/angular.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Angular</span>
      	
    		</div>
    	</a>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Gnu">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/gnu.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Gnu</span>
    
    		</div>
    	</a>
  		</div>

   		<div class="card col s12 m2 z-depth-5">
   		<a href="/watch/watchmain/Flutter">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/flutter.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Flutter</span>
     
    		</div>
    	</a>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Unity">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/unity.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Unity</span>

    		</div>
    	</a>
  		</div>

  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Node">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/node.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Node</span>
    		</div>
    	</a>
  		</div>

  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Debian">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/debian.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Debian</span>
    		</div>
    	</a>
  		</div>

  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Git">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/git.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Git</span>
    		</div>
    	</a>
  		</div>

  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Django">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/django.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Django</span>
    		</div>
    	</a>
  		</div>

  		  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Php">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/php.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Php</span>
    		</div>
    	</a>
  		</div>


  		  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Firebase">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/firebase.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Firebase</span>
    		</div>
    	</a>
  		</div>

	  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Mysql">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/mysql.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Mysql</span>
    		</div>
    	</a>
  		</div>

  			  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Mongodb">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/mongodb.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Mongodb</span>
    		</div>
    	</a>
  		</div>


  					  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Linux">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/linux.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Linux</span>
    		</div>
    	</a>
  		</div>

  						  			<div class="card col s12 m2 z-depth-5">
  		<a href="/watch/watchmain/Jquery">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/jquery.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Jquery</span>
    		</div>
    	</a>
  		</div>



    </div></div></div>
   

      	

			);
	}
}
export default watch