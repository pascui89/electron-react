import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import electronReducer from './reducers/ElectronReducer';
import DashboardContainer from './containers/DashboardContainer';

const store = createStore(electronReducer);
ReactDOM.render(
    <Provider store={store}>
        <DashboardContainer />
    </Provider>, document.getElementById('renderer'));