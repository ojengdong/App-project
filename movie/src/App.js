import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom'
import Movie from './Component/Movie'
import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
  
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path='/movie/:id' element={<Detail/>}/>
    </Routes>
  )
}

export default App;
