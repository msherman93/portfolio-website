import React, {Component} from 'react';
import {Document, Page} from 'react-pdf';

import {boxShadow, boxWrapper} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import dominic from '../assets/Dominic.jpg';
import resume from '../assets/ShermanResume.pdf';

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
    state = {
        loading: true
    };

    render() {
        if (this.state.loading) {
            return null;
        }

        return (
            <div style={{height: window.innerHeight}}>
                <div style={boxWrapper}>
                    <h2>{'Dominic'}</h2>
                    <p style={textStyles.blueBodyText}>{'Full-stack software developer, with primary experience in JavaScript, React, React-Native, and GraphQL'}</p>
                    <img
                        alt={''}
                        src={dominic}
                        style={styles.image}
                    />
                </div>
                <div style={boxWrapper}>
                    <Document
                        file={resume}
                        onLoadSuccess={() => {
                            console.log('here');
                            this.setState({loading: false});
                        }}
                    >
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        );
    }
}
