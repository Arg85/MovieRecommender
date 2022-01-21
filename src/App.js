import './App.css';
import {useState,useEffect} from 'react'
import Header from './Components/Header/Header';
import MainNav from './Components/MainNav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
   <Header/>
    <div className="App">
    <Container sx={{maxWidth:"1300px",marginBottom:"105px"}}>
      <Routes>
        <Route exact path="/" element={<Trending/>}></Route>
        <Route   path="/Movies" element={<Movies/>}></Route>
        <Route  path="/Series" element={<Series/>}></Route>
        <Route  path="/Search" element={<Search/>}></Route>
      </Routes>
    </Container>
    </div>
    <MainNav/>
    </BrowserRouter>
  );
}

export default App;
