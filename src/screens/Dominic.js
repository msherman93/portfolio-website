import React, {Component} from 'react';

import {boxShadow, boxWrapper} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import dominic from '../assets/Dominic.jpg';

const styles = {
    image: {
        borderRadius: 25,
        boxShadow,
        height: 'auto',
        marginTop: '5%',
        width: '40%'
    }
};

export default class Dominic extends Component {
    render() {
        console.log('rendered');

        return (
            <div
                style={{
                    height: window.innerHeight,
                    paddingBottom: window.innerHeight * 0.6
                }}
            >
                <div style={boxWrapper}>
                    <h2>{'Dominic'}</h2>
                    <p style={textStyles.blueBodyText}>{'Full-stack software developer, with primary experience in JavaScript, React, React-Native, and GraphQL'}</p>
                    <img
                        alt={''}
                        src={dominic}
                        style={styles.image}
                    />
                </div>
                <div
                    onLoad={() => {
                        console.log('here');
                    }}
                    style={boxWrapper}
                >
                    <embed
                        allowFullScreen
                        height={window.innerHeight * 0.6}
                        src={'/ShermanResume.pdf'}
                        width={window.innerWidth * 0.5}
                    />
                </div>
            </div>
        );
    }
}
