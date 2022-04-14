import React from 'react';
import Home from './components/home/Home'
import Header from './components/home/Header'
import Footer from './components/home/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HouseList from "./components/search/HouseList";
import SearchPage from "./components/search/SearchPage";
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducers/reducer";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <StateProvider initialState={initialState} reducer={reducer}>
                    
                    <Header/>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home/>}/>
                            <Route path="explore"
                                   element={<HouseList/>}>
                            </Route>
                            <Route path="results"
                                   element={<SearchPage/>}>
                            </Route>
                        
                        </Route>
                    </Routes>
                    <Footer/>
                </StateProvider>
            </div>
        </BrowserRouter>);
}

/*function App() {
    return (<BrowserRouter>
        <div className="container">
            <Provider store={store}>
                <Header/>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        
                        {/!*<Route path="search"*!/}
                        {/!*       element={<SearchList/>}>*!/}
                        {/!*    <Route path=":resultId" element={<SearchDetail/>} />*!/}
                        {/!*    /!*<Route exact path="/results/:resultId"*!/!*!/}
                        {/!*    /!*       element={<SearchDetail/>}>*!/!*!/}
                        {/!*    /!*</Route>*!/!*!/}
                        {/!*</Route>*!/}
                        {/!*TEST SEARCH*!/}
                        
                        <Route path="explore"
                               element={<HouseList/>}>
                        </Route>
                        <Route path="results"
                               element={<SearchPage/>}>
                        </Route>
                    
                    </Route>
                </Routes>
                <Footer/>
            </Provider>
        </div>
    </BrowserRouter>);
}*/

export default App;