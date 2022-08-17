import React from 'react'
import './BasketPhotos.scss'
import { v4 as uuidv4 } from 'uuid';

export default function BasketPhotos({basketArrPhotos}) {
  return (
    <div className='basketPhotos'>
        {basketArrPhotos.map(el=>{
            return(
                <img src={el} key={uuidv4()}/>
            )
        })}
    </div>
  )
}
