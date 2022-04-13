import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


/*
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './style/index.css';
import App from './App';
import {Provider} from "react-redux";
import houseReducer from "./reducers/house-reducer";
import {createStore} from "store/src/store-engine";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(houseReducer)


ReactDOM.render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/
