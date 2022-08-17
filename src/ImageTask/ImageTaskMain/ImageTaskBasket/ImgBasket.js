import "./ImgBasket.scss"
import { v4 as uuidv4 } from 'uuid';

export default function ImgBasket({search,src,setSearch,setBasketArrPhotos}) {
    let searchName = search.searchName
    let basketArr = []

    if(!sessionStorage.getItem(searchName) && searchName){
      sessionStorage.setItem(searchName,[])
     }

    for(let key in sessionStorage){
      if(sessionStorage.hasOwnProperty(key)){
        basketArr.push(key)
      }
    }

    function drop(e){
      e.preventDefault()
      let text = e.target.innerText
      if(text === searchName){
        setSearch({...search,photoArr:search.photoArr.filter(el=>el.id !== src.id)})
        if(!sessionStorage.getItem(text).length){
          sessionStorage.setItem(text,JSON.stringify([src.src]))
        }
        else if(sessionStorage.getItem(text).length){
          sessionStorage.setItem(text,JSON.stringify([...JSON.parse(sessionStorage.getItem(text)),src.src]))
          if(search.photoArr.length === 1){
            alert("congrtulations")
          } 
        }
      }
    }

   
  return (
    <div className='imgBasket'  >
      {basketArr.length > 0 && basketArr.map(el=>{
        return(
          <div className='newBasket' 
            onDragOver={e=>e.preventDefault()}
            onDrop={(e)=>drop(e)}  key={uuidv4()} 
            onClick={(e=>setBasketArrPhotos([...JSON.parse(sessionStorage.getItem(e.target.innerText))]))}>
            {el}
          </div> 
        )
      })}
    </div>
  )
}
