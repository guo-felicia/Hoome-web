import React from 'react';
import Home from './components/home/Home'
import Header from './components/home/Header'
import Footer from './components/home/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfilePage, {EditProfilePage} from "./components/profile/InformationCard";
import Following from "./components/profile/Following";
import Followers from "./components/profile/Followers";
import Reviews from "./components/profile/Reviews";
import Favorites from "./components/profile/Favorites";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Login/SignupPage"
import HouseList from "./components/search/HouseList";
import SearchPage from "./components/search/SearchPage";
import {StateProvider} from "./StateProvider";
import houseReducer, {initialState} from "./reducers/House-reducer";
import SearchDetail from "./components/detail/SearchDetail";
import {combineReducers} from "redux";
import questionReducer from "./reducers/Question-reducer";
import favoriteReducer from "./reducers/Favorite-reducer";


function App() {
    const rootReducer = combineReducers({
        houses: houseReducer,
        questions: questionReducer,
        favorites: favoriteReducer
    });
    
    return (
        <BrowserRouter>
            <div className="container">
                <StateProvider initialState={initialState} reducer={rootReducer}>
                    <Header/>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home/>}/>
                            <Route path="/profile">
                                <Route index element={<ProfilePage/>}/>
                                <Route path="/profile/editprofile" element={<EditProfilePage/>}/>
                                <Route path="/profile/following" element={<Following/>}/>
                                <Route path="/profile/followers" element={<Followers/>}/>
                                {/*TODO review list change to questions / just remove*/}
                                <Route path="/profile/review" element={<Reviews/>}/>
                                <Route path="/profile/favorites" element={<Favorites/>}/>
                            </Route>
                            <Route path="explore" element={<HouseList/>}/>
                            <Route path="search" element={<SearchPage/>}/>
                            <Route path="search/:id" element={<SearchDetail/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/signup" element={<SignupPage/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </StateProvider>
            </div>
        </BrowserRouter>);
}

export default App;