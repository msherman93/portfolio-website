import React, {Component} from 'react';

import {boxShadow, boxWrapper, centeredColumn} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import michael from '../assets/pictures/MichaelImage.jpg';

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

export default class Michael extends Component {
    render() {
        return (
            <div style={{height: window.innerHeight}}>
                <div style={boxWrapper}>
                    <div style={styles.textWrapper}>
                        <p style={textStyles.playfairMedium}>{'Michael'}</p>
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
