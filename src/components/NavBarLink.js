import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';

import styles from '../css/components/NavBarLink.module.css';

export default class NavBarLink extends Component {
    render() {
        const {text, id} = this.props;

        return (
            <Nav.Link
                href={'#'}
                onClick={() => document.getElementById(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })}
            >
                <div className={styles.navLinkWrapper}>
                    <p className={styles.navLink}>
                        {text}
                    </p>
                </div>
            </Nav.Link>
        );
    }
}
