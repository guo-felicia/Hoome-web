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
import OthersProfile from "./components/profile/OthersProfile"
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Login/SignupPage"
import HouseList from "./components/search/HouseList";
import SearchPage from "./components/search/SearchPage";
import {StateProvider} from "./StateProvider";
import houseReducer, {initialState} from "./reducers/House-reducer";
import SearchDetail from "./components/detail/SearchDetail";
import {combineReducers, createStore} from "redux";
import questionReducer from "./reducers/Question-reducer";
import favoriteReducer from "./reducers/Favorite-reducer";
import {ProfileProvider} from "./ProfileProvider";
import SecureRoute from "./SecureRoute";
import {Provider} from "react-redux";
import PostNewHouse from "./components/profile/PostNewHouse";

function App() {
    const rootReducer = combineReducers({
        houses: houseReducer,
        questions: questionReducer,
        favorites: favoriteReducer
    });
    
    const store = createStore(rootReducer);
    
    return (
        <BrowserRouter>
            <div className="container">
                <ProfileProvider>
                    <StateProvider initialState={initialState} reducer={houseReducer}>
                        <Provider store={store}>
                            <Header/>
                            <Routes>
                                <Route path="/">
                                    <Route index element={<Home/>}/>
                                    <Route path="/profile">
                                        <Route index element={<SecureRoute> <ProfilePage/> </SecureRoute>}/>
                                        {/*<Route path="/profile/editprofile" element={<EditProfilePage/>}/>*/}
                                        <Route path="/profile/following" element={<Following/>}/>
                                        <Route path="/profile/followers" element={<Followers/>}/>
                                        {/*TODO review list change to questions / just remove*/}
                                        <Route path="/profile/review" element={<Reviews/>}/>
                                        <Route path="/profile/favorites" element={<Favorites/>}/>
                                    </Route>
                                    <Route path="/newhouse" element={<SecureRoute> <PostNewHouse/> </SecureRoute>}/>
                                    <Route path="explore" element={<HouseList/>}/>
                                    <Route path="search" element={<SearchPage/>}/>
                                    <Route path="search/:id" element={<SearchDetail/>}/>
                                    <Route path="/login" element={<LoginPage/>}/>
                                    <Route path="/register" element={<SignupPage/>}/>
                                    <Route path="profile/:id" element={<OthersProfile/>}/>
                                </Route>
                            </Routes>
                            <Footer/>
                        </Provider>
                    </StateProvider>
                </ProfileProvider>
            </div>
        </BrowserRouter>);
}

export default App;