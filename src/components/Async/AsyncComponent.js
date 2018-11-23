import React, { Component } from 'react';

// routes configure
import { routeConfig } from 'routes/configure';
// components
import Loading from 'components/Loading/Loading';

// 비동기식 청크관리
export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {

        static Component = null;

        state = {
            Component: AsyncComponent.Component
        };

        // 페이지 AUTH 체크
        authCheck = () => {
            const { history } = this.props;
            let isAuth = false;
            for (let i = 0; i < routeConfig.length; i++) {
                if (routeConfig[i].path === history.location.pathname) {
                    isAuth = routeConfig[i].requireAuth;
                    break;
                } else if (routeConfig[i].children.length > 0) {

                    for (let idx; routeConfig[i].length; idx++) {
                        if (routeConfig[i].children[idx].path === history.location.pathname) {
                            isAuth = routeConfig[i].requireAuth;
                            break;
                        }
                    }

                }
            }
            this.tokenCheck(isAuth);
        }

        // 토큰 체크
        tokenCheck = (isAuth) => {
            const localCheck = JSON.parse(localStorage.getItem('loginInfo'));
            const { history } = this.props;
            
            if (localCheck) {
                sessionStorage.setItem('loginInfo', JSON.stringify(localCheck));
            }

            const sessionCheck = JSON.parse(sessionStorage.getItem('loginInfo'));

            if (!(sessionCheck && sessionCheck.token)) {
                if (isAuth) {
                    history.replace('/login');
                }
            } else {
                if (history.location.pathname === '/login') {
                    history.replace('/');
                }
            }
        }

        componentWillMount() {
            this.authCheck();
            if (!this.state.Component) {
                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                });
            }
        }

        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />;
            } else {
                // 로딩
                return <Loading />;
            }
        }

    }

    AsyncComponent.getComponent = () => {
        return getComponent().then(({default: Component}) => {
            AsyncComponent.Component = Component;
        });
    }

    return AsyncComponent;
}