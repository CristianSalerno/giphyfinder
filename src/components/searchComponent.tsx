import React from 'react';
import {useState, useEffect} from 'react';
import './search.css'
const SearchComponent:React.FC = () => {

    const [foundedGif, getOneGif] = useState([]);
    
    
    return(
        <div className="search-container">
            <input type="search" placeholder=""/>
        </div>
    )
};


export default SearchComponent;