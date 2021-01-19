import React from 'react';
import {useState, useEffect} from 'react'
import {Gifs} from './api/gifs'




const App:React.FC<any> =()=> {

  const [gif , setGif] = useState<Gifs>();

  const searchGif = async () =>{
    let response = await  fetch('https://api.giphy.com/v1/gifs/search?api_key=1onyPAIshszx9FwpflWDVS7mdWSVMCUi&q=parasite&limit=25&offset=0&rating=g&lang=en')
    let gif = await response.json();
    setGif(gif.data[0])
  }

  useEffect(() => {
    searchGif();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {gif?.id}
      </header>
    </div>
  );

}

export default App;
