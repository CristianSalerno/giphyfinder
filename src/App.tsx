import React from 'react';
import {useState, useEffect} from 'react'
import {IGifs} from './api/gifs'


const App:React.FC = () => {

  const [gif , setGif] = useState<IGifs[]>([]);

  const getTrendingGifs = async () =>{
    let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=1onyPAIshszx9FwpflWDVS7mdWSVMCUi&limit=25&rating=g')
    let allTrendingGifs = await response.json();
    
    setGif(allTrendingGifs.data.map((gif:any)=>({
      id: gif.id,
      url:gif.images.original.url,
    })))
  }

  useEffect(() => {
    if(gif.length === 0){
      getTrendingGifs();
    }else{
      return undefined;
    }
  })

  const renderGifs = () =>{
    return gif.map(el =>{
      return (
        <div>
          <h2>hola</h2>
          <img src={el.url} alt=""/>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      {renderGifs()}
      </header>
    </div>
  );

}

export default App;
