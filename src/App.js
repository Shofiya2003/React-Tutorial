import logo from './logo.svg';
import './App.css';
import Practice from './Components/FunctionalComponent/Practice'

function App() {
  return (
    <div className="App">
      
      <h1>Hello React!</h1>
      <Practice />
      <PracticeFunctional />
    </div>
  );
}


function PracticeFunctional(){

  return(
  <div>
    
    <h3> Second Functional component</h3>
    <p>Functional component in same file as App Component</p>
    
  </div>
  )
}

export default App;
