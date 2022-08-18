import "./ImgBasket.scss"
import { v4 as uuidv4 } from 'uuid';

export default function ImgBasket({src,setSomeState,setBasketPhotoArr,basketPhotoArr}) {

    function drop(e){
      e.preventDefault()      
      if(e.target.innerText === src.group){
        sessionStorage.setItem("fetchPhotoArr",JSON.stringify(
          JSON.parse(sessionStorage.getItem("fetchPhotoArr")).filter(el=>el.id !== src.id)
          ))
        if(!sessionStorage.getItem(src.group).length){
          sessionStorage.setItem(src.group,JSON.stringify([src.src]))
          setSomeState([])
        }
        else if(sessionStorage.getItem(src.group).length){
          sessionStorage.setItem(src.group,JSON.stringify([...JSON.parse(sessionStorage.getItem(src.group)),src.src]))
          setBasketPhotoArr([])
          if(JSON.parse(sessionStorage.getItem("fetchPhotoArr")).length < 1){
            alert("Finish congratulations")
          }
        }
      }     
    }

   
  return (
    <div className='imgBasket'  >
      {sessionStorage.getItem("searchWordArr") && JSON.parse(sessionStorage.getItem("searchWordArr")).map(el=>{
        return(
          <div key={uuidv4()} className='newBasket'
            onDragOver={e=>e.preventDefault()}
            onDrop={(e)=>drop(e)}
            onClick={(e)=>{
              if(sessionStorage.getItem(e.target.innerText).length === 0)return
              else if(e.target.innerText === basketPhotoArr.name ) setBasketPhotoArr({arr:[],name:""})
              else setBasketPhotoArr({arr:JSON.parse(sessionStorage.getItem(e.target.innerText)),name:e.target.innerText})
            }}>
            {el}
          </div>
        )
      })}
    </div>
  )
}
