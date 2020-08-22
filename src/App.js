import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
    <Header/>
        
        <p>
        Kraig is building a slack clone.
        </p>
        
      <div className='App__body'>
        <Sidebar/>
        </div>
    </div>
  );
}

export default App;
