import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

import {black, lightGrey, white} from '../styles/colors';
import {CONTACT_US, DOMINIC, HOME, MICHAEL, PORTFOLIO} from '../constants/routes';
import {textStyles} from '../styles/text-styles';

import NavBarLink from './NavBarLink';

const styles = {
    logo: {
        height: 'auto',
        width: '20%'
    },
    textWrapper: {
        color: black,
        justifyContent: 'flex-end',
        opacity: 1,
        width: '20%'
    },
    wrapper: {
        backgroundColor: white,
        borderColor: lightGrey,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        opacity: 1,
        paddingLeft: '10%',
        paddingRight: '10%',
        width: '100%'
    }
};

export default class NavBar extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand={'md'}
                id={'navbar'}
                style={styles.wrapper}
                variant={'light'}
            >
                <Navbar.Brand
                    as={'p'}
                    style={textStyles.playfairSmall}
                >
                    <p>{'Sherman Bros.'}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={styles.textWrapper}>
                    <NavBarLink
                        path={HOME}
                        text={'Home'}
                    />
                    <NavBarLink
                        path={PORTFOLIO}
                        text={'Portfolio'}
                    />
                    <NavBarLink
                        path={DOMINIC}
                        text={'Dominic'}
                    />
                    <NavBarLink
                        path={MICHAEL}
                        text={'Michael'}
                    />
                    <NavBarLink
                        path={CONTACT_US}
                        text={'Contact'}
                    />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
