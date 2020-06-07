import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import './App.css';



function App() {
  
  const [theme, setTheme] = useState('light');

  const verifyTheme = () => {
    if(theme==='dark'){
      document.documentElement.style.cssText=`
      --first-color:black;
      --second-color:white;
      --third-color:blue;

    `;
    }
    else{
      document.documentElement.style.cssText=`
      --first-color:white;
      --second-color:black;
      --third-color:red;

    `;
    }
  }

  const changeTheme = () => {
    (theme==='light')?setTheme('dark'): setTheme('light');
  }

  const handleTheme = () => {
    changeTheme();
    verifyTheme();
  }

  return (
    <div  className="App">
      <Navbar/>
      <Banner/>
      <h1>Hello</h1>
      <p>World</p>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
