import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { matchPath } from 'react-router';
import _ from 'lodash';
import { AppContainer } from 'react-hot-loader';
// settings
import stores from './stores';
import registerServiceWorker from './registerServiceWorker';
// ant design css
import 'antd/dist/antd.css';
// routes
import { Routes } from 'routes';
// sass
import './assets/sass/main.scss';

// components
import App from './pages/App'

// store setting
let store = stores;

const render = async (Component) => {
    if (process.env.NODE_ENV === 'development') {
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <Router>
                        <App />
                    </Router>
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    } else {
        const getComponents = [];
        const { pathname } = window.location;
        _.forEach(Routes, (route) => {
            const match = matchPath(pathname, route);
            if (!match) return;
            const { getComponent } = route.component;
            getComponents.push(getComponent());
        });
        await Promise.all(getComponents);
        ReactDOM.hydrate(
            <Provider store={store}>
                <AppContainer>
                    <Router>
                        <App />
                    </Router>
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    }
}

render(App)


if (module.hot) {
    module.hot.accept('./pages/App', () => { render(App) })
}

registerServiceWorker();
