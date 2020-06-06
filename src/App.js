import React, {useState} from 'react';
import './App.css';



function App() {
  
  const [theme, setTheme] = useState('light');

  const verifyTheme = () => {
    if(theme==='dark'){
      document.documentElement.style.cssText=`
      --first-color:black;
      --second-color:white;
    `;
    }
    else{
      document.documentElement.style.cssText=`
      --first-color:white;
      --second-color:black;
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
      <h1>Hello</h1>
      <p>World</p>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
