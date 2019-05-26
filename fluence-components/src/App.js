import React from 'react';
import { Theme, getTheme } from "react-uwp/Theme";
import CallToActionBtn from "./components/CallToActionBtn";
import '../src/assets/css/App.css';

function App() {
  return (
    <Theme
      className="App"
      theme={getTheme({
        themeName: "dark", // set custom theme
        accent: "#0078D7", // set accent color
        useFluentDesign: true, // sure you want use new fluent design.
        desktopBackground: "./assets/img/dark-mountains.jpg !important"
      })}
    >
      <CallToActionBtn />
    </Theme>
  );
}

export default App;


