import ImgBasket from './ImageTaskBasket/ImgBasket'
import "./ImgMain.scss"
import { v4 as uuidv4 } from 'uuid';
import BasketPhotos from './BasketPhotos/BasketPhotos';
import { useState } from 'react';

export default function Main() {
  const[,setSomeState] = useState([])
  const[basketPhotoArr,setBasketPhotoArr] = useState({})

let src = {}


  return (
    <div className='imageMain'>
      <div className='imageBoard'>
        {sessionStorage.getItem("fetchPhotoArr") && JSON.parse(sessionStorage.getItem("fetchPhotoArr")).map(el=>{
          return(
            <img key={uuidv4()} alt={el.group}  onDragStart={(e)=>{
                  src["src"]=e.target.src;  src["group"]=el.group; src["id"]= el.id
                }
              }
              draggable="true"
              src={`http://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`}/>
          )
        })}
      </div>
        <ImgBasket  src={src}  setSomeState={setSomeState} setBasketPhotoArr={setBasketPhotoArr} basketPhotoArr={basketPhotoArr}/>
        <BasketPhotos  basketPhotoArr={basketPhotoArr}/>
    </div>
  )
}
