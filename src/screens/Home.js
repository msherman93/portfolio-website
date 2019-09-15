import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

import {boxWrapper, centeredColumn} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';

const styles = {
    wrapper: {
        ...boxWrapper,
        width: '100vw'
    }
};

export default class Home extends Component {
    render() {
        return (
            <Container
                fluid
                style={centeredColumn}
            >
                <div style={styles.wrapper}>
                    <p style={textStyles.playfairLarge}>{'Sherman Bros.'}</p>
                    <p style={textStyles.playfairMedium}>{'Web & Mobile Development'}</p>
                    <p style={textStyles.subHeader}>{'“Your business is unique, your website should be too."'}</p>
                </div>
            </Container>
        );
    }
}
