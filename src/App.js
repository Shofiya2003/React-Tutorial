import logo from './logo.svg';
import './App.css';
import Practice from './Components/FunctionalComponent/Practice'
import ClassC from './Components/FunctionalComponent/ClassComponene/ClassC';

import React,{Component} from 'react';
import {useState} from 'react';



function App() {

  const [myName,setData]=useState("shofiya")
  const [number,updateNumber]=useState(0);
  const names=["Shinchan","Doremon","Ziyaad","Mamma","Chota Bheem","Rocky","XYZ"];

  function Clicked(){
    let n=Math.floor((Math.random())*names.length);
    console.log(n);
    setData(names[n]);
  }

  
  function update(){
    updateNumber(number+1);
  }
  console.log("-------------");
  return (
    <div className="App">
      
      <h1>Hello {myName}</h1>
      <h2>{number}</h2>
      {/* <Practice />
      <PracticeFunctional />
      <ClassC />
      <User /> */}
      <button onClick={Clicked}>Update Name</button>
      <button onClick={update}>Increase</button>
    </div>
  );
}

//Functional Component
function PracticeFunctional(){

  return(
  <div>
    
    <h3> Second Functional component</h3>
    <p>Functional component in same file as App Component</p>
    
  </div>
  )
}

//Class component
class User extends Component
{
  render()
  {
    return(
      <div>
          <p>Class component inside App.js</p>
      </div>
      
    )
  }
 
}

export default App;
