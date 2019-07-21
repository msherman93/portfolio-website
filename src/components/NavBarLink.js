import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import styles from '../css/components/NavBarLink.module.css';

export default class NavBarLink extends Component {
    render() {
        const {text, path} = this.props;

        return (
            <NavLink
                className={styles.navLinkWrapper}
                style={{textDecoration: 'none'}}
                to={path}
            >
                <p className={styles.navLink}>
                    {text}
                </p>
            </NavLink>
        );
    }
}
