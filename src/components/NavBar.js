import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {blue, lightGrey, white} from '../styles/colors';

import NavBarLink from './NavBarLink';

const styles = {
    logo: {
        height: 'auto',
        width: '20%'
    },
    textWrapper: {
        color: white,
        justifyContent: 'space-evenly',
        opacity: 1,
        position: 'relative',
        width: '100%'
    },
    wrapper: {
        backgroundColor: blue,
        borderColor: lightGrey,
        borderWidth: 1,
        opacity: 1
    }
};

export default class NavBar extends Component {
    render() {
        return (
            <Navbar
                style={styles.wrapper}
                collapseOnSelect
                expand={'xl'}
                fixed={'top'}
                id={'navbar'}
                variant={'dark'}
            >
                <Navbar.Brand
                    as={'p'}
                >
                    <NavBarLink
                        path={'/'}
                        text={'Sherman Brothers'}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav style={styles.textWrapper}>
                        <NavBarLink
                            path={'/portfolio'}
                            text={'Portfolio'}
                        />
                        <NavBarLink
                            path={'/dominic'}
                            text={'Dominic'}
                        />
                        <NavBarLink
                            path={'/michael'}
                            text={'Michael'}
                        />
                        <NavBarLink
                            path={'/contact-us'}
                            text={'Contact Us'}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
