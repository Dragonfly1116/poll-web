import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
    <Root store={store} />
     ,document.getElementById('root'));
registerServiceWorker();
