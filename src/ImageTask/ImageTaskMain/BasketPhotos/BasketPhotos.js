import React from 'react'
import './BasketPhotos.scss'
import { v4 as uuidv4 } from 'uuid';

export default function BasketPhotos({basketPhotoArr}) {
  return (
    <div className='basketPhotos'>
                  <p>Group pics</p>
        {basketPhotoArr["arr"] && basketPhotoArr.arr.map(el=>{
            return(
                <img src={el} key={uuidv4()} alt={"photo"} />
            )
        })}
    </div>
  )
}
