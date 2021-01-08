import React from 'react'

/**
* @author
* @function Globalfilter
**/

export const Globalfilter = ({filter, setFilter}) => {
  return(
    <span>
        Search {''}
        <input value = {filter ||''} 
        onChange={e=>setFilter(e.target.value)}
        />
    </span>
   )

 }

  