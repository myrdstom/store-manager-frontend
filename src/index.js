import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './react/components/App';

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    
    document.getElementById('root'));
