import React from 'react';
import {useState} from 'react';
import api from '../../api'
import './search.css'

interface Props {
    callback: (searchTerm: string) => void,
}

const SearchComponent:React.FC<Props> = (props:Props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [gifSearched, setSearchedGif] = useState<any>([])

    const handleChange = async (event:any) => {
        setSearchTerm(event.target.value)
    }  
    
    const getSearchResults = async(event:any) =>{
        if (event.charCode === 13 || event.code === 'Enter') {
            props.callback(searchTerm)
            let response = await api.search(searchTerm)
            setSearchedGif(response)
        }
        
    }

    return(
        <div className="search-container">

            <input 
            type="search" 
            placeholder="search"
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={getSearchResults}
            />

            <div className="container">
                {gifSearched.map((gif:any) =>{
                    return(
                    <div >
                        <img src={gif.images} alt=""/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
};


export default SearchComponent;