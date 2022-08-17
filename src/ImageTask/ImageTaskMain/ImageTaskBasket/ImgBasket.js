import React, { useState } from 'react'
import "./ImgBasket.scss"
import { v4 as uuidv4 } from 'uuid';

export default function ImgBasket({search,imageSrc}) {
    const[basketDiv,setBasketDiv] = useState([])
    const[basketObj,setBasketObj] = useState({})

    let searchName = search.searchName


    if(basketDiv.length === 0){
        setBasketDiv([searchName])
    }

    else if(basketDiv.length > 0){
        for(let i = 0;i < basketDiv.length;i++){
            if(basketDiv[i] === searchName) break
            else if(basketDiv[i]  !== searchName && i === basketDiv.length-1){
              setBasketDiv([...basketDiv,searchName])
            }
        }
    }

  return (
    <div className='imgBasket'  >
       {basketDiv.length && basketDiv.map(el=>{
        return(
            <div className='newBasket' 
            onDragOver={e=>e.preventDefault()}
            onDrop={(e)=>{
              e.preventDefault()
              if(e.target.innerText === search.searchName){
                if(!basketObj.searchName){
                  setBasketObj({...basketObj,searchName : imageSrc})
                }
                
              }
              console.log(imageSrc)
              }}  key={uuidv4()} >
              {el}
            </div> 
        )
       }) }
    </div>
  )
}
