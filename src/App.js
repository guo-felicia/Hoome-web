import React from 'react';
import Home from './home-components/Home'
import Header from './home-components/Header'
import Footer from './home-components/Footer'
import SearchPage from './detail-page/SearchPage'

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