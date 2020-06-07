import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HorCard from "./components/HorizontalCard";
import "./App.css";

function App() {
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
  const [theme, setTheme] = useState("light");

  const verifyTheme = () => {
    if (theme === "dark") {
      document.documentElement.style.cssText = `
      --first-color:black;
      --second-color:white;
      --third-color:blue;

    `;
    } else {
      document.documentElement.style.cssText = `
      --first-color:white;
      --second-color:black;
      --third-color:red;

    `;
    }
  };

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleTheme = () => {
    changeTheme();
    verifyTheme();
  };

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="Content">
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
      </div>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
