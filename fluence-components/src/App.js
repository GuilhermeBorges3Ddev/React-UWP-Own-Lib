import React from 'react';
import { Theme, getTheme } from "react-uwp/Theme";
import CallToActionBtn from "./Components/CallToActionBtn";
import './Assets/css/App.css';

function App() {
  return (
    <Theme
      className="App"
      theme={getTheme({
        themeName: "dark", // set custom theme
        accent: "#0078D7", // set accent color
        useFluentDesign: true // sure you want use new fluent design.
      })}
    >
      <CallToActionBtn />
    </Theme>
  );
}

export default App;
