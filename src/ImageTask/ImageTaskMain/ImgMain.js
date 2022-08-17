import React from 'react'
import ImgBasket from './ImageTaskBasket/ImgBasket'
import "./ImgMain.scss"
import { v4 as uuidv4 } from 'uuid';

export default function Main({search}) {
  let imageSrc = ""

  // function onStart(){

  // }

  return (
    <div className='imageMain'>
        {search.photoArr && search.photoArr.map(el=>{
          return(
            <img key={uuidv4()} onDragStart={e=> imageSrc = e.target.src} draggable="true" src={`http://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}/>
          )
        })}
        {search.searchName && <ImgBasket search={search} imageSrc={imageSrc}/>}
    </div>
  )
}
