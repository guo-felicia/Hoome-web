import React from 'react';
import Home from './components/home/Home'
import Header from './components/home/Header'
import Footer from './components/home/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HouseList from "./components/search/HouseList";
import SearchPage from "./components/search/SearchPage";
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducers/reducer";
import SearchDetail from "./components/detail/SearchDetail";


function App() {
    return (
        
        <BrowserRouter>
            <div className="container">
                <StateProvider initialState={initialState} reducer={reducer}>
                    
                    <Header/>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home/>}/>
                            <Route path="explore" element={<HouseList/>}/>
                            <Route path="search" element={<SearchPage/>}/>
                            <Route path="search/:id" element={<SearchDetail/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </StateProvider>
            </div>
        </BrowserRouter>);
}
export default App;