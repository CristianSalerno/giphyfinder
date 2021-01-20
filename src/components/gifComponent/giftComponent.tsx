import React from 'react';
import {useState, useEffect} from 'react';
import {IGifs} from '../../api/gifs';
import '../../styles/app.css'
import api from '../../api/'
import SearchComponent from '../searchComponent/searchComponent';

const GiftComponent:React.FC = () => {

    const [arrayGifs , setGif] = useState<IGifs[]>([]);
    const [searchInput, setSearchInput] = useState('');


  const getTrendingGifs = async () =>{
    let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=1onyPAIshszx9FwpflWDVS7mdWSVMCUi&limit=25&rating=g')
    let allTrendingGifs = await response.json();
        
    setGif(allTrendingGifs.data.map((gif:any)=>({
      id: gif.id,
      url:gif.images.original.url,
      })))
    }
    
      const getSearchTerm = (term: string) => {
        setSearchInput(term)
      }


      useEffect(() => {
        if(arrayGifs.length === 0){
          getTrendingGifs();
        }
      },[arrayGifs])



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
        <>
        <SearchComponent callback={getSearchTerm} />  
          <div className="container">
            {renderGifs()}
          </div>
        </>
      ) 
}


export default GiftComponent;