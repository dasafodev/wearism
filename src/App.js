import React, { useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HorCard from "./components/HorizontalCard";
import VertCard from "./components/VerticalCard";
import "./App.css";

function App() {

  const photosList = [
    {
      image: 1
    },
    {
      image: 2
    },
    {
      image: 3
    },
    {
      image: 4
    },
  ]

  const filterList = [
    {
      text: "Sort",
      height: "50px",
      width: "100px",

    },
    {
      text: "Product type",
      height: "50px",
      width: "100px",

    },
    {
      text: "Style",
      height: "50px",
      width: "100px",

    },
    {
      text: "Size",
      height: "50px",
      width: "100px",

    },
    {
      text: "Colour",
      height: "50px",
      width: "100px",

    },
    {
      text: "Price Range",
      height: "50px",
      width: "100px",

    },
    {
      text: ">",
      height: "50px",
      width: "30px",
      isSelected: true,
    },
  ]
  const categories = [
    {
      text: "HOME",
      icon: "home",
      isSelected: false,
      height: "70px",
      width: "200px",
    },
    {
      text: "NEW IN",
      icon: "energy",
      isSelected: true,
      height: "70px",
      width: "200px",
    },
    {
      text: "COATS",
      icon: "jacket",
      isSelected: false,
      height: "70px",
      width: "200px",
    },
    {
      text: "TOPS",
      icon: "top",
      isSelected: false,
      height: "70px",
      width: "200px",
    },
    {
      text: "KNITWEAR",
      icon: "",
      isSelected: false,
      height: "70px",
      width: "200px",
    },
  ];

  const [theme, setTheme] = useState("Light");

  const verifyTheme = () => {
    if (theme === "Dark") {
      document.documentElement.style.cssText = `
      --first-color:#121212;
      --second-color:white;
      --third-color:blue;
      --element-gray:#787878

    `;
    } else {
      document.documentElement.style.cssText = `
      --first-color:white;
      --second-color:#121212;
      --third-color:red;
      --element-gray:#f1f1f1

    `;
    }
  };

  useEffect(() => {
    verifyTheme()
    
  })
  const changeTheme = () => {
    console.log(theme);
    if (theme === "Light") { 
      setTheme("Dark" ) ;
    }
    else { 
      setTheme("Light");
     }
    console.log(theme);

  };

  const handleTheme =  () => {
    changeTheme();
    // verifyTheme();
  };

  return (
    <div className="App">
      <Navbar changeTheme={handleTheme} currentTheme={theme} />
      <div className="Main">
        <Banner className="Banner" />
        <div className="Categories">
          {categories.map((category) => {
            return (
              <HorCard
                key={category.id}
                height={category.height}
                width={category.width}
                text={category.text}
                icon={category.icon}
                isSelected={category.isSelected}
              />
            );
          })}
        </div>
        <div className="Content">
          <h1>COATS</h1>
          <small>View more</small>
          <div className="Filters">
            {
              filterList.map(item => {
                return (
                  <HorCard text={item.text} height={item.height} width={item.width} isSelected={item.isSelected} />
                )
              })
            }
          </div>
          <div className="Photos">
            {
              photosList.map(item => {
                return (
                  <VertCard image={item.image} />
                );
              })
            }
          </div>
        </div>
      </div>
      {/* <button onClick={handleTheme}>Change Theme</button> */}
    </div>
  );
}

export default App;
