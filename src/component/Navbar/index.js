import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navabar
**/

const Navabar = (props) => {

   
  return(
    <div className="menu">
       
        <NavLink  to="/admin">admin</NavLink> 
    
        <NavLink   to="/user">user</NavLink>

    </div>
   )

 }

export default Navabar