import React from 'react';
import {useState, useEffect} from 'react';

const SearchComponent:React.FC = () => {

    const [foundedGif, getOneGif] = useState([]);
    
    return(
        <div>
            <input type="search"/>
            <label htmlFor="">find one</label>
        </div>
    )
};


export default SearchComponent;