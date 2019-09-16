import React, {Component} from 'react';

import {boxShadow, boxWrapper, centeredColumn} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import gabriel from '../assets/GabrielImage.JPG';

const styles = {
    image: {
        borderRadius: 25,
        boxShadow,
        height: 'auto',
        marginTop: '5%',
        width: '40%'
    },
    subHeader: {
        ...textStyles.subHeader,
        paddingTop: 16
    },
    textWrapper: {
        ...centeredColumn,
        width: '40%'
    }
};

export default class Gabriel extends Component {
    render() {
        return (
            <div style={boxWrapper}>
                <div style={styles.textWrapper}>
                    <p style={textStyles.playfairMedium}>{'Gabriel'}</p>
                    <p style={styles.subHeader}>{'College student who likes programming'}</p>
                </div>
                <img
                    alt={''}
                    src={gabriel}
                    style={styles.image}
                />
            </div>
        );
    }
}
