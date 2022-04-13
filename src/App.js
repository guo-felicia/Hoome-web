import React from 'react';
import Home from './components/home/Home'
import Header from './components/home/Header'
import Footer from './components/home/Footer'
import SearchPage from './components/search/SearchPage'

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/">
                        
                        <Route index element={<Home/>}/>
                        <Route path="/search"
                               element={<SearchPage/>}>
                        </Route>
                    
                    </Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;