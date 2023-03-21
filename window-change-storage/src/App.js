import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';


function App() {
  useEffect(()=>{
   window.addEventListener('storage',event=>{
    console.log("123")
    console.log(event);
   })
  },[])
  return (
    <div className="App">
    <button onClick={()=>{
      window.localStorage.setItem('ad',Math.random()*100000)
    }}>测试</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
