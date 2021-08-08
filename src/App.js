import logo from './logo.svg';
import './App.css';
import Practice from './Components/FunctionalComponent/Practice'
import ClassC from './Components/FunctionalComponent/ClassComponene/ClassC';
import Tutorial from './Components/StatesInClassCom/Tutorial'
import React,{Component} from 'react';
import {useState} from 'react';
import PropsTut from './Components/FunctionalComponent/PropsTut';



function App() {

  const [myName,setData]=useState("shofiya")
  const [number,updateNumber]=useState(0);
  const names=["Shinchan","Doremon","Ziyaad","Mamma","Chota Bheem","Rocky","XYZ"];

  function Clicked(){
    let n=Math.floor((Math.random())*names.length);
    console.log(n);
    setData(names[n]);
  }

  function greet(){
    alert("Good morning")
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
      {/* States in Functional Component */}
      <button onClick={Clicked}>Update Name</button>
      <button onClick={()=>{updateNumber(number+1)}}>Increase</button>
      <Tutorial />

      <PropsTut greeting={greet} info={"Shofiya"} email={"sh@g.com"} other={{mobile:"222",address:"delhi"}}/>
      {/* <PropsTut info={"Nobita"} email={"xyz@yah.com"} other={{mobile:"211",address:"japan"}}/>
      <PropsTut info={"Shinchan"} email={"schan@mail.in"} other={{mobile:"234",address:"japan"}} /> */}
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
