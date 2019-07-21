import React, {Component} from 'react';

import NavBar from './components/NavBar';
import Routing from './Routing';
import styles from './css/App.module.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navBarHeight: 0
        };
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
                className={styles.wrapper}
                style={{
                    height: window.innerHeight,
                    paddingTop: '10%',
                    width: window.innerWidth
                }}
            >
                <NavBar />
                <div style={{paddingTop: 100}}>
                    <Routing />
                </div>
            </div>
        );
    }
}

export default App;
