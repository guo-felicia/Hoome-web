import React from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (<BrowserRouter>
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