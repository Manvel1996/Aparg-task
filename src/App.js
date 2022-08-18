import './App.scss';
import { useState } from 'react';
import Search from './ImageTask/ImageTaskSearch/ImgSearch';
import Main from './ImageTask/ImageTaskMain/ImgMain';

function App() {

  const[state,setState] = useState("")
  // const[search,setSearch] = useState({})

   


  return (
    <div className="App">
      <Search  state={state} setState={setState}/>
      <Main />
    </div>
  );
}

export default App;
