import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

import {black, lightGrey, white} from '../styles/colors';
import {CONTACT_US, DOMINIC, GABRIEL, HOME, MICHAEL, PORTFOLIO} from '../constants/routes';
import {textStyles} from '../styles/text-styles';

import NavBarLink from './NavBarLink';

const styles = {
    brand: {
        ...textStyles.playfairSmall,
        textDecoration: 'none'
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
                    as={'div'}
                >
                    <NavLink
                        style={styles.brand}
                        to={HOME}
                    >
                        {'Sherman Bros.'}
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={styles.textWrapper}>
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
                        path={GABRIEL}
                        text={'Gabriel'}
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
