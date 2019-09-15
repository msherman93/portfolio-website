import React, {Component} from 'react';

import NavBar from './components/NavBar';
import Routing from './Routing';
import {centeredColumn} from './styles/shared-styles';

export default class App extends Component {
    render() {
        return (
            <div
                id={'wrapper'}
                style={centeredColumn}
            >
                <NavBar />
                <div>
                    <Routing />
                </div>
            </div>
        );
    }
}
