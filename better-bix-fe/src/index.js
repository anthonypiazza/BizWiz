import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducers'; 
import './index.css';
import App from './App';
import './fonts/Sansation-Regular.ttf';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />     
        </Provider>
    </Router>
    , document.getElementById('root')
);

