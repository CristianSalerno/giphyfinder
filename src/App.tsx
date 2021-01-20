import React from 'react';
import GiftService from './api/giftservice'
import SearchComponent from './components/searchComponent';


const App:React.FC = () => {

  return (
    <div > 
      <SearchComponent/>  
      <GiftService/>
    </div>
  );

}

export default App;
