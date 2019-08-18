import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from 'react-bootstrap';

import {blue, white} from '../styles/colors';
import {centeredRow} from '../styles/shared-styles';

const text = {
    color: white,
    padding: 8
};

const styles = {
    mainText: {
        ...text,
        fontSize: 18
    },
    subText: {
        ...text,
        fontSize: 14
    },
    wrapper: {
        ...centeredRow,
        backgroundColor: blue,
        bottom: 0,
        left: 0,
        marginTop: '5%',
        padding: 20,
        width: '100%'
    }
};

export default class Footer extends Component {
    render() {
        return (
            <Container
                fluid
                style={styles.wrapper}
            >
                <Row style={centeredRow}>
                    <p style={styles.mainText}>{'CONTACT US'}</p>
                    <Col>
                        <p style={styles.subText}>{'740-424-4776'}</p>
                        <p style={styles.subText}>{'dominic.sherman98@gmail.com'}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
