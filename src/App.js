import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var posts = '전주 고기 맛집';


  return (
    <div className="App">
      <div className="black-nav">
        <div> Blog </div>
      </div>
      <img src={logo}/>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
