import React, {Component} from 'react';

import {boxShadow, boxWrapper} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import michael from '../assets/Michael.png';

const styles = {
    image: {
        borderRadius: 25,
        boxShadow,
        height: 'auto',
        marginTop: '5%',
        width: '40%'
    }
};

export default class Michael extends Component {
    render() {
        return (
            <div style={{height: window.innerHeight}}>
                <div style={boxWrapper}>
                    <h2>{'Michael'}</h2>
                    <p style={textStyles.blueBodyText}>{'Graphic designer'}</p>
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
