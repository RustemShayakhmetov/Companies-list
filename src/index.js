import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
// компонент высшего порядка, которым оборачиваем App, добавляя функционал в него
import { Provider } from 'react-redux';

export const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);