// React & Redux
import * as React from 'react';
import thunk from 'redux-thunk'
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store and reducers
import { createStore, applyMiddleware } from 'redux';
import electronReducer from './reducers/ElectronReducer';
import initilState from './states/IElectronState';

// Containers
import DashboardContainer from './containers/DashboardContainer';
import AlertContainer from './containers/AlertContainer';

const store = createStore(electronReducer, initilState, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
        <AlertContainer />
        <DashboardContainer />
    </Provider>, document.getElementById('renderer') as HTMLElement);