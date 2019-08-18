import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

import {blue, lightGrey, white} from '../styles/colors';

import NavBarLink from './NavBarLink';

const styles = {
    logo: {
        height: 'auto',
        width: '20%'
    },
    textWrapper: {
        color: white,
        justifyContent: 'flex-end',
        opacity: 1,
        width: '20%'
    },
    wrapper: {
        backgroundColor: blue,
        borderColor: lightGrey,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        opacity: 1,
        paddingLeft: '7%',
        paddingRight: '7%'
    }
};

export default class NavBar extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand={'md'}
                fixed={'top'}
                id={'navbar'}
                style={styles.wrapper}
                variant={'dark'}
            >
                <Navbar.Brand
                    as={'p'}
                >
                    <p>{'Logo'}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={styles.textWrapper}>
                    <NavBarLink
                        path={'/'}
                        text={'Home'}
                    />
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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
