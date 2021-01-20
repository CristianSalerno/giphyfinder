import React from 'react';
import {useState, useEffect} from 'react';
import {IGifs} from './gifs';
import '../styles/app.css'

const GiftService:React.FC = () => {

    const [arrayGifs , setGif] = useState<IGifs[]>([]);

   const getTrendingGifs = async () =>{
        let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=1onyPAIshszx9FwpflWDVS7mdWSVMCUi&limit=25&rating=g')
        let allTrendingGifs = await response.json();
        
        setGif(allTrendingGifs.data.map((gif:any)=>({
          id: gif.id,
          url:gif.images.original.url,
        })))
      }
    

      useEffect(() => {
        if(arrayGifs.length === 0){
          getTrendingGifs();
        }else{
          return undefined;
        }
      })


      const renderGifs = () =>{
        return arrayGifs.map(el =>{
          return (
            <div >
              <img src={el.url} alt=""/>
            </div>
          )
        })
      }

     return(   
        <div className="container">
            {renderGifs()}
        </div>
     )

    
}


export default GiftService;