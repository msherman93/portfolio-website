import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/components/NavBarLink.module.css';
import textStyles from '../css/TextStyles.module.css';

export default class NavBarLink extends Component {
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
                    className={textStyles.navBarText}
                >
                    {text}
                </Nav.Link>
            </NavLink>
        );
    }
}
