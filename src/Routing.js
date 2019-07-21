import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Dominic from './screens/Dominic';
import Michael from './screens/Michael';
import ContactUs from './screens/ContactUs';

export default class Routing extends Component {
    render() {
        return (
            <div>
                <Route
                    component={Home}
                    exact
                    path="/"
                />
                <Route
                    component={Portfolio}
                    exact
                    path="/portfolio"
                />
                <Route
                    component={Dominic}
                    exact
                    path="/dominic"
                />
                <Route
                    component={Michael}
                    exact
                    path="/michael"
                />
                <Route
                    component={ContactUs}
                    exact
                    path="/contact-us"
                />
            </div>
        );
    }
}
