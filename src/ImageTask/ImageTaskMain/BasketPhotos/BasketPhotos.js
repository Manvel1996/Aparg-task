import React from 'react'
import './BasketPhotos.scss'

export default function BasketPhotos({basketArrPhotos}) {
  return (
    <div className='basketPhotos'>
        {basketArrPhotos.map(el=>{
            return(
                <img src={el}/>
            )
        })}
    </div>
  )
}
