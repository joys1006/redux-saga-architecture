/**
 * @author Has
 * @reg_date 2018-10-08
 * @summary routes에 대한 컴포넌트 JS
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

// routes configure
import { routeConfig } from './configure';

// 서브라우트 생성
const routeChildren = (value) => {
    let routes = [];
    _.reduce(value, (prev, childrenValue, i) => {
        routes.push(
            <Route path={childrenValue.path}
                   key={i}
                   component={ childrenValue.component } />
        );
    }, 0);
    return routes;
};
// 메인 라우트 생성
const routes = () => {
    let routes = [];
    _.reduce(routeConfig, (prev, value, i) => {

        if (value.children.length === 0) {
            routes.push(
                <Route exact
                       path={value.path}
                       key={i}
                       component={value.component} />
            );
        } else {
            let addChlidren = routeChildren(value.children);
            routes = [
                ...routes,
                addChlidren
            ];
        }

    }, 0);

    return routes;
};

// App JSX ROUTES
export const Routes = () => {
    return (
        <Switch>
            {routes()}
        </Switch>
    );
}