import './App.scss';
import { useState } from 'react';
import Search from './ImageTask/ImageTaskSearch/ImgSearch';
import Main from './ImageTask/ImageTaskMain/ImgMain';

function App() {


  const[search,setSearch] = useState({})

   


  return (
    <div className="App">
      <Search  setSearch={setSearch}/>
      <Main search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
