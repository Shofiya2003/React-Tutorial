import React from "react";

function NavSocialItem(props){
    return(
        <li className="social">
          <a href={props.url}><i className={props.class}></i></a>
        </li>
    )
}

export default NavSocialItem