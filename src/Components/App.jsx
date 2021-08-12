import React from "react";
import Home from "./Home";
import Timer from "./Timer";
import {Route,Switch} from "react-router-dom";
import Emoji from "./Emoji";
import Navbar from "./Navbar";
import Error from "./Error";





function App() {
  return (
    <div>

      <Switch>
       <Route exact path='/' component={Navbar} />
       <Route path='/noteapp' component={Home}/>
       <Route path='/timer' component={Timer} />
       <Route  path='/emojipedia' component={Emoji}/>

       <Route component={Error} />
      </Switch>
      
      
    </div>
  );
}

export default App;
