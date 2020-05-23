

import React from 'react';
import logo from './barca.png'; //we are using logo of react
import './App.css'; //importing css file

/*
functional based component
easy to create , create a function and export it out
after exporting it is handled by index.js 
*/

function App(){
  return (
    //react app expects us to return atleast one component/element
    //this is not html this is jsx , whatever we start we have to end it even br like <br /> (selfclosing)
    //jsx elements must have one parent element because return only returns one so we wrapup all tags in a div tag

    <div className= "App"> 
        <header className= "App-header">
          <img src={logo} className="App-logo"/>
          <p>VISCA EL BARCA </p>
          <p>MES QUE UN CLUB </p>
        </header>
    </div>
  );
}

export default App;