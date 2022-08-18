import React from 'react'
import './ImgSearch.scss'

export default function Search({state,setState}) {
   
  

    function fetchSearch(){

      if(!sessionStorage.getItem("searchWordArr") && state.length >= 2){
        sessionStorage.setItem("searchWordArr",JSON.stringify([state]))
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37bda1798910c78bef5284aed9201d60&tags=${state.toLowerCase()}&format=json&nojsoncallback=1&per_page=5`)
          .then(res => res.json())
          .then(data =>{
            let groupArr = data.photos.photo.map(el=>{
              return(
                 {...el,group:state }
              )
            })
            sessionStorage.setItem("fetchPhotoArr",JSON.stringify([...groupArr]))
            sessionStorage.setItem(state,[])
            setState("")
          })
      }
      else if(sessionStorage.getItem("searchWordArr") && state.length >= 2){
        for(let i = 0;i < JSON.parse(sessionStorage.getItem("searchWordArr")).length;i++){
          if(JSON.parse(sessionStorage.getItem("searchWordArr"))[i] === state) return
          else if(JSON.parse(sessionStorage.getItem("searchWordArr"))[i] !== state && i === JSON.parse(sessionStorage.getItem("searchWordArr")).length - 1 ){
            fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37bda1798910c78bef5284aed9201d60&tags=${state.toLowerCase()}&format=json&nojsoncallback=1&per_page=5`)
            .then(res => res.json())
            .then(data =>{
              let groupArr2 = data.photos.photo.map(el=>{
                return(
                  {...el,group:state }
                  )
                })
                sessionStorage.setItem("fetchPhotoArr",JSON.stringify([...groupArr2,...JSON.parse(sessionStorage.getItem("fetchPhotoArr"))]))
                sessionStorage.setItem("searchWordArr",JSON.stringify([state,...JSON.parse(sessionStorage.getItem("searchWordArr"))]))
                sessionStorage.setItem(state,[])
                return setState("")
              })
          }
        }
      }
    }
    
   
  return (
    <div className='imageSearch'>
           <input maxLength="18" type="search" value={state} onChange={(e)=>setState(e.target.value)} placeholder="Search"/>
           <button onClick={()=>fetchSearch()}>Search</button>
    </div>
  )
}
