import ImgBasket from './ImageTaskBasket/ImgBasket'
import "./ImgMain.scss"
import { v4 as uuidv4 } from 'uuid';
import BasketPhotos from './BasketPhotos/BasketPhotos';
import { useState } from 'react';

export default function Main({search,setSearch}) {
  const[basketArrPhotos,setBasketArrPhotos] = useState([])


let src = {}

  return (
    <div className='imageMain'>
      <div className='imageBoard'>
        {search.photoArr && search.photoArr.map(el=>{
          return(
            <img key={uuidv4()}   onDragStart={(e)=>{src["src"]=e.target.src; src["id"]= el.id}} draggable="true" src={`http://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}/>
            )
          })}
      </div>
        <ImgBasket search={search} src={src} setSearch={setSearch} setBasketArrPhotos={setBasketArrPhotos}/>
        <BasketPhotos basketArrPhotos={basketArrPhotos}/>
    </div>
  )
}
