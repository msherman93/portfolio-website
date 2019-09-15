import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/NavBarLink.module.css';

const navText = {
    fontSize: 16,
    fontWeight: '900'
};

export default class NavBarLink extends Component {
    _chooseStyles = () => window.location.pathname === this.props.path ?
        navText :
        {
            ...navText,
            opacity: 0.6
        };

    render() {
        const {text, path} = this.props;

        return (
            <NavLink
                className={styles.navLinkWrapper}
                style={{textDecoration: 'none'}}
                to={path}
            >
                <Nav.Link
                    as={'p'}
                    href={path}
                    style={this._chooseStyles()}
                >
                    {text}
                </Nav.Link>
            </NavLink>
        );
    }
}
