import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <section className="main-renderer">
          <div className="container row">
            <div className="col-4">col-4</div>
            <div className="col-4">col-4</div>
            <div className="col-4">col-4</div>
          </div>
         </section>
      </header>
    </div>
  );
}

export default App;
