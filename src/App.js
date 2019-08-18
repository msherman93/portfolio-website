import React, {Component} from 'react';

import NavBar from './components/NavBar';
import Routing from './Routing';
import Footer from './components/Footer';
import {centeredColumn} from './styles/shared-styles';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navBarHeight: 0
        };
    }

    componentDidMount() {
        this._setNavBarHeight();
    }

    componentDidUpdate() {
        if (this.state.navBarHeight !== document.getElementById('navbar').scrollHeight) {
            this._setNavBarHeight();
        }
    }

    // eslint-disable-next-line react/no-set-state
    _setNavBarHeight = () => this.setState({navBarHeight: document.getElementById('navbar').scrollHeight});

    render() {
        return (
            <div
                id={'wrapper'}
                style={centeredColumn}
            >
                <NavBar />
                <div style={{paddingTop: this.state.navBarHeight + window.innerHeight * 0.02}}>
                    <Routing />
                </div>
                <Footer />
            </div>
        );
    }
}
