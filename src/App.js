import React, { useState } from 'react';
import './App.css';
import Building from './component/Building';
import Login from './component/Login'
import InterFaces from './component/UserInterface';


function App() {
  

  return (
    <div className='bg'>
        { Login.isLogin===true ? <Login/> : <InterFaces/>}
        <Building></Building>
    </div>
  );
}

export default App;
