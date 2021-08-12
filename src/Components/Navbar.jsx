import React from "react";
import NavItem from "./NavItem";
import NavSocialItem from "./NavSocialItem";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="wrapper">
         <Helmet>
        <link rel="stylesheet" href="stylesNav.css"/>
       
        </Helmet> 
    <nav className="flex-nav">
      <ul>
       
       <Link to="/noteapp"><NavItem itemName="Notes App" link="/noteapp"/></Link>
      <Link to="/timer"><NavItem itemName="Time" link="/timer"/></Link> 
       <Link to="emojipedia"><NavItem itemName="Emojipedia" link="/emojipedia"/></Link>
      <Link to="/login"><NavItem itemName="Login" /></Link> 
       
       {/* <NavSocialItem class="fa fa-twitter" url="#"/>
       <NavSocialItem class="fa fa-facebook" url="#"/>
       <NavSocialItem class="fa fa-github" url="#"/>
       <NavSocialItem class="fa fa-instagram" url="#"/> */}
    
      </ul>
    </nav>

  </div>

    )
}

export default Navbar;