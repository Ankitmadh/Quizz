import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import News from './NewsAPi';
import Main from './Main';

function App() {
  
  return (
    <div>
<Main />
  <News />
  </div>
  )

}

export default App;
