import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import electronReducer from './reducers/ElectronReducer';
import initilState from './states/IElectronState';
import DashboardContainer from './containers/DashboardContainer';

const store = createStore(electronReducer, initilState);
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
        <DashboardContainer />
    </Provider>, document.getElementById('renderer') as HTMLElement);