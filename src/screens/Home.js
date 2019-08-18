import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

import homePicture from '../assets/HomePicture.jpg';
import {boxWrapper, centeredColumn} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import {loremIpsum} from '../constants/text';

const styles = {
    bodyText: {
        ...textStyles.blueBodyText,
        paddingBottom: 40
    },
    headerText: {
        paddingBottom: 25,
        textAlign: 'center'
    },
    image: {
        boxShadow: '0 0 8px darkGrey',
        height: 'auto',
        width: '75%'
    }
};

export default class Home extends Component {
    render() {
        return (
            <Container
                fluid
                style={centeredColumn}
            >
                <div style={boxWrapper}>
                    <h2 style={styles.headerText}>{'Sherman Brothers Web & Mobile Development'}</h2>
                    <p style={styles.bodyText}>{'“Your business is unique, your website should be too."'}</p>
                    <p style={styles.bodyText}>{loremIpsum}</p>
                </div>
                <img
                    alt={''}
                    src={homePicture}
                    style={styles.image}
                />
            </Container>
        );
    }
}
