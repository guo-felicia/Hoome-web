import React from 'react';
import Home from './components/home/Home'
import Header from './components/home/Header'
import Footer from './components/home/Footer'
import SearchPage from './components/search/SearchPage'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage, {EditProfilePage} from "./components/profile/InformationCard";
import Following from "./components/profile/Following";
import Followers from "./components/profile/Followers";
import Reviews from "./components/profile/Reviews";
import Favorites from "./components/profile/Favorites";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Login/SignupPage"

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

                        <Route path="/profile">
                            <Route index element={<ProfilePage/>}/>

                            <Route path="/profile/editprofile" element={<EditProfilePage/>}>
                            </Route>
                            <Route path="/profile/following" element={<Following/>}>

                            </Route>
                            <Route path="/profile/followers" element={<Followers/>}>

                            </Route>
                            <Route path="/profile/review" element={<Reviews/>}>

                            </Route>
                            <Route path="/profile/favorites" element={<Favorites/>}>

                            </Route>
                        </Route>

                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/signup" element={<SignupPage/>}/>
                    
                    </Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;