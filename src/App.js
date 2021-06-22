import Nav from './Components/nav';
import Vision from './Components/Vision';
import Team  from './Components/Teams';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {useState} from 'react';
function Foot(){
  return  <div className="foot">
  <span>Crafted with </span> 
  <i className="fa fa-heart" ></i> 
  <span>by Design Studio & Developed by Tinkering Lab Students' Body</span>
  </div>
}
function Renderer(){
  return <div>
    <Nav></Nav>
    <Vision></Vision>
    <Team></Team>
    <Contact></Contact>
    <Footer></Footer>
    <Foot></Foot>
  </div>
}
function AltRenderer(){

    return <div className="altRenderer">
        <p>HOME</p>
        <hr></hr>
        <p>FAQ</p>
        <hr></hr>
        <p>ABOUT</p>
        <hr></hr>

        <a href="https://channeli.in/oauth/authorise?client_id=WZmGmuAoNumazG9FuSSRcizR90tiG9T5XNTdfJHD&redirect_uri=http://tinkeringlab.iitr.ac.in/oauth/channeli">Login</a>
    </div>

}
function App(){
  const [click,setClick]=useState(false);
  function handleClick(){
    if(click===true){
      setClick(false);
    }
    else{
      setClick(true);
    }
  }
  function Hamburger(){
    return <div id="hamburger" onClick={handleClick}>
    <span>Tinkering Lab</span>
    <div className="ham"></div>
    <div className="ham"></div>
    <div className="ham"></div>

</div>

  }

  return (<div>
    <Hamburger></Hamburger>
    {click===false?<Renderer></Renderer>:<AltRenderer></AltRenderer>}
    </div>
  )
}
export default App;