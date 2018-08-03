import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/'

ReactDOM.render(
    <Root store={store} />
     ,document.getElementById('root'));
registerServiceWorker();
