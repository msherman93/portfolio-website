import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/NavBarLink.module.css';
import {textStyles} from '../styles/text-styles';

export default class NavBarLink extends Component {
    _chooseStyles = () => window.location.pathname === this.props.path ?
        textStyles.selectedNavBarText :
        textStyles.navBarText;

    render() {
        const {text, path} = this.props;

        return (
            <NavLink
                className={path !== '/' ? styles.navLinkWrapper : ''}
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
