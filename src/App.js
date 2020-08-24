import React from 'react';
import './App.css';
import Profile from "./profile/Profile";

var person={fullname:'Hakim Barouni', bio:'bac+5',profession:'engineer'};

function App() {
  
  function handleName(e) {

    e.preventDefault();
    alert(`Hello ${person.fullname} !`);


};

  return (
  
  <>
  
  <Profile data={person} alert={handleName}>

  <img src="./image.jpg" alt='' 
  style={{width:'100px' , height:'100px', marginLeft:'40px', marginTop:'10px',marginBottom:'10px'}}/>

  </Profile>

  
  </>
  );
}

export default App;
