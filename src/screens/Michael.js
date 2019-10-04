import React, {Component} from 'react';

import {boxShadow, boxWrapper, centeredColumn} from '../styles/shared-styles';
import michael from '../assets/headshots/michael.jpg';
import {playfairStyles, robotoStyles} from '../styles/text-styles';

const styles = {
    image: {
        borderRadius: 25,
        boxShadow,
        height: 'auto',
        marginTop: '5%',
        width: '40%'
    },
    subHeader: {
        ...robotoStyles.medium,
        paddingTop: 16
    },
    textWrapper: {
        ...centeredColumn,
        width: '40%'
    }
};

export default class Michael extends Component {
    render() {
        return (
            <div style={{height: window.innerHeight}}>
                <div style={boxWrapper}>
                    <div style={styles.textWrapper}>
                        <p style={playfairStyles.medium}>{'Michael'}</p>
                        <p style={styles.subHeader}>{'UI/UX Designer and Illustrator. Designs graphic user interface elements, as well as branding and original images.'}</p>
                    </div>
                    <img
                        alt={''}
                        src={michael}
                        style={styles.image}
                    />
                </div>
            </div>
        );
    }
}
