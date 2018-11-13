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
 <div class="row"></div><div class="row"></div>
    <div class="row" >
 			    		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Androidstudio">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/androidstudio.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Android Studio</span>
      	
    		</div>
    	</NavLink>
  		</div>
      		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Angular">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/angular.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Angular</span>
      	
    		</div>
    	</NavLink>
  		</div>


      <div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Bootstrap">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/bootstrap.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Bootstrap</span>
    		</div>
    	</NavLink>
  		</div>

        <div class="card col s12 m2 z-depth-5">
        <NavLink to="/watch/watchmain/C++">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/cpp.png')}  style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">C++</span>
      
    		</div>
    	</NavLink>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  				<NavLink to="/watch/watchmain/Csharp">
  		
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/c.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">C</span>
      		
    		</div>
    	</NavLink>
   
  		</div>


  		<div class="card col s12 m2 z-depth-5">
  <NavLink to="/watch/watchmain/Csharp">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/csharp.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">C#</span>
     
    		</div>
</NavLink>
  		</div>

  		        <div class="card col s12 m2 z-depth-5">
        <NavLink to="/watch/watchmain/Css">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/css.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Css</span>
  
    		</div>
    	</NavLink>
  		</div>

			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Debian">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/debian.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Debian</span>
    		</div>
    	</NavLink>
  		</div>

 			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Django">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/django.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Django</span>
    		</div>
    	</NavLink>
  		</div>
  		 			    		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Electron">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/electron.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Electron</span>
      	
    		</div>
    	</NavLink>
  		</div>


  		  		  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Firebase">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/firebase.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Firebase</span>
    		</div>
    	</NavLink>
  		</div>

  		   		<div class="card col s12 m2 z-depth-5">
   		<NavLink to="/watch/watchmain/Flutter">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/flutter.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Flutter</span>
     
    		</div>
    	</NavLink>
  		</div>
  		  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Git">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/git.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Git</span>
    		</div>
    	</NavLink>
  		</div>

  		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Gnu">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/gnu.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Gnu</span>
    
    		</div>
    	</NavLink>
  		</div>




        <div class="card col s12 m2 z-depth-5">
        <NavLink to="/watch/watchmain/Html">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/html5.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Html</span>
    
    		</div>
   		</NavLink>
  		</div>

  		        <div class="card col s12 m2 z-depth-5">
        <NavLink to="/watch/watchmain/Java">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/java.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Java</span>

    		</div>
    	</NavLink>
  		</div>

  		        <div class="card col s12 m2 z-depth-5">
        <NavLink to="/watch/watchmain/Javascript">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/js.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">JavaScript</span>
      	
    		</div>
    	</NavLink>
  		</div>

  								  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Jquery">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/jquery.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Jquery</span>
    		</div>
    	</NavLink>
  		</div>

  		 			    		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Kotlin">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/kotlin.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Kotlin</span>
      	
    		</div>
    	</NavLink>
  		</div>




  		 					  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Linux">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/linux.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Linux</span>
    		</div>
    	</NavLink>
  		</div>

  		  		  					  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Lua">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/lua.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Lua</span>
    		</div>
    	</NavLink>
  		</div>
  		  		 		  					  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Materilize">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/materilize.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Materilize</span>
    		</div>
    	</NavLink>
  		</div>


 			  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Mongodb">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/mongodb.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Mongodb</span>
    		</div>
    	</NavLink>
  		</div>

	  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Mysql">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/mysql.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Mysql</span>
    		</div>
    	</NavLink>
  		</div>


  		  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Node">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/node.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Node</span>
    		</div>
    	</NavLink>
  		</div>

  		  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Php">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/php.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Php</span>
    		</div>
    	</NavLink>
  		</div>

  		    		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Puppeteer">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/puppeteer.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Puppeteer</span>
      	
    		</div>
    	</NavLink>
  		</div>


        <div class="card col s12 m2 z-depth-5">
        <NavLink to="/watch/watchmain/Python">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/python.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Python</span>
      	
    		</div>
    	</NavLink>
  		</div>

	 		  					  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/R">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/r.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">R</span>
    		</div>
    	</NavLink>
  		</div>






  		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/React">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/react.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Reactjs</span>
      
    		</div>
    	</NavLink>
  		</div>

 



 		  					  			<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Sass">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/sass.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Sass</span>
    		</div>
    	</NavLink>
  		</div>

 			    		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Scala">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/scala.png')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Scala</span>
      	
    		</div>
    	</NavLink>
  		</div>



  		<div class="card col s12 m2 z-depth-5">
  		<NavLink to="/watch/watchmain/Unity">
    		<div class="card-image waves-effect waves-block waves-light">
     			<img class="activator" src={require('./images/unity.jpg')} style={{height:'300px'}}/>
   			</div>
    		<div class="card-content">
     			<span class="card-title activator grey-text text-darken-4">Unity</span>

    		</div>
    	</NavLink>
  		</div>


    </div></div>
   

      	

			);
	}
}
export default watch