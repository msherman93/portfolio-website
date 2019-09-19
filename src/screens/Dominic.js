import React, {Component} from 'react';

import {boxShadow, boxWrapper, centeredColumn} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import dominic from '../assets/pictures/DominicImage.jpg';

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

export default class Dominic extends Component {
    render() {
        return (
            <div style={boxWrapper}>
                <div style={styles.textWrapper}>
                    <p style={textStyles.playfairMedium}>{'Dominic'}</p>
                    <p style={styles.subHeader}>{'Full-stack software engineer, with primary experience in JavaScript, React, React-Native, and GraphQL'}</p>
                </div>
                <img
                    alt={''}
                    src={dominic}
                    style={styles.image}
                />
            </div>
        );
    }
}
