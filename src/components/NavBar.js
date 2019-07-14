import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/components/NavBar.module.css';

import NavBarLink from './NavBarLink';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar
                className={styles.wrapper}
                collapseOnSelect
                expand={'xl'}
                fixed={'top'}
                id={'navbar'}
                variant={'dark'}
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className={styles.textWrapper}>
                        <NavBarLink
                            text={'Home'}
                        />
                        <NavBarLink
                            text={'Portfolio'}
                        />
                        <NavBarLink
                            text={'Dominic'}
                        />
                        <NavBarLink
                            text={'Michael'}
                        />
                        <NavBarLink
                            text={'Contact Us'}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
