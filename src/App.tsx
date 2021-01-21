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
      <div className="theme-selector--container">
        <div id="theme-selector" onClick={selectColorMode} className={buttonTheme.value}/>
      </div>    
      <div className="title">
        <h2>Find your gif</h2>
      </div>
      <GiftComponent/>
      <footer>
        <h5> Developed by <a href="https://github.com/CristianSalerno/giphyfinder" target="_blank">Cristian Salerno</a> </h5>
      </footer>
    </div>
  );

}

export default App;
