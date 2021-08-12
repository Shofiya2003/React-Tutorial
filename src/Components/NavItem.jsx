
import React from "react";
import {Link} from "react-router-dom";
function NavItem(props){
    return(
        <li><a href="#">{props.itemName}</a></li>
    )
}

export default NavItem;
