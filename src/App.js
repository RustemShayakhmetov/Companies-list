import React from "react";
import List from './components/List/List'
import './App.css'
import EditCard from "./components/EditCard/EditCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<List /> }/> 
                    <Route path="/company/:id" element={<Card />}/>
                    <Route path="/company/edit/:id" element={<EditCard />}/>
                </Routes>
            </div>
        </BrowserRouter> 
  )
}

export default App;
