import React, { useState } from 'react';
import GiftComponent from './components/gifComponent/giftComponent'

const App:React.FC = () => {

  const [theme , setTheme] = useState('');
  const [buttonTheme, setButtonTheme] = useState({
    value:'theme-button-light'
  });
    

  const selectColorMode = () =>{
    if(theme === 'dark-theme--mode'){
      setTheme('light-theme--mode')
      setButtonTheme({value: 'theme-button-light'})
    }else{
      setTheme('dark-theme--mode')
      setButtonTheme({value: 'theme-button-dark'})
    }
  }

  return (
    <div className={theme}>  
      <div onClick={selectColorMode} className={buttonTheme.value}/>
      <GiftComponent/>
    </div>
  );

}

export default App;
