import React from 'react'
import { useState } from 'react';
import './ImgSearch.scss'

export default function Search({setSearch}) {
   
  const[state,setState] = useState("")

    function fetchSearch(){
      if(state.length >= 2){
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37bda1798910c78bef5284aed9201d60&tags=${state.toLowerCase()}&format=json&nojsoncallback=1&per_page=5`)
        .then(res => res.json())
        .then(data =>  setSearch({photoArr:data.photos.photo,searchName:state.toLowerCase()}))
      }
    }
   
  return (
    <div className='imageSearch'>
           <input maxLength="12" type="search" value={state} onChange={(e)=>setState(e.target.value)} placeholder="Search"/>
           <button onClick={()=>fetchSearch()}>Search</button>
    </div>
  )
}
