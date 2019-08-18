import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Dominic from './screens/Dominic';
import Michael from './screens/Michael';
import ContactUs from './screens/ContactUs';
import {CONTACT_US, DOMINIC, HOME, MICHAEL, PORTFOLIO} from './constants/routes';

export default class Routing extends Component {
    render() {
        return (
            <div>
                <Route
                    component={Home}
                    exact
                    path={HOME}
                />
                <Route
                    component={Portfolio}
                    exact
                    path={PORTFOLIO}
                />
                <Route
                    component={Dominic}
                    exact
                    path={DOMINIC}
                />
                <Route
                    component={Michael}
                    exact
                    path={MICHAEL}
                />
                <Route
                    component={ContactUs}
                    exact
                    path={CONTACT_US}
                />
            </div>
        );
    }
}
