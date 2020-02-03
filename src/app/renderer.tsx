import * as React from 'react';
import thunk from 'redux-thunk'
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import electronReducer from './reducers/ElectronReducer';
import initilState from './states/IElectronState';
import DashboardContainer from './containers/DashboardContainer';

const store = createStore(electronReducer, initilState, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
        <DashboardContainer />
    </Provider>, document.getElementById('renderer') as HTMLElement);