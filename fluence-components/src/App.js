import React from 'react';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import MyComponent from "./MyComponent";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <UWPThemeProvider
        className="App"
        theme={getTheme({
          themeName: "dark", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: "http://127.0.0.1:8092/static/images/jennifer-bailey-10753.jpg" // set global desktop background image
        })}
      >
        <MyComponent />
      </UWPThemeProvider>
    </React.Fragment>
  );
}

export default App;
