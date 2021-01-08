import React from 'react'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Navabar
**/

const Navabar = (props) => {
  return(
    <div className="menu">
        <ul>
            <li>
                <NavLink to="/admin">admin</NavLink>
                
            </li>
            <li>
                
                <NavLink to="/user">user</NavLink>

            </li>
        </ul>
    </div>
   )

 }

export default Navabar