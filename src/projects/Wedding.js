import React from 'react';

import {robotoStyles} from '../styles/text-styles';
import {projects, SPADES, WEDDING} from '../constants/projects';
import {boxShadow} from '../styles/shared-styles';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const styles = {
    background: {
        position: 'absolute',
        width: '100%',
        zIndex: -5
    },
    body: {
        ...robotoStyles.medium,
        paddingTop: 16
    },
    imageWrapper: {
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        zIndex: -5
    },
    leftImage: {
        left: -200,
        position: 'absolute',
        top: -300,
        width: 850,
        zIndex: -1
    },
    logo: {
        width: '20%'
    },
    rightImage: {
        bottom: -100,
        position: 'absolute',
        right: -100,
        width: 950,
        zIndex: -1
    },
    textWrapper: {
        paddingLeft: '5%',
        marginTop: '4%',
        width: '50%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
};

const Wedding = () => (
    <Container
        fluid
        style={{
            padding: 0
        }}
    >
        <div
            style={styles.imageWrapper}
        >
            <img
                alt={''}
                src={require('../assets/projects/weddingwebsitebackground.jpg')}
                style={styles.background}
            />
        </div>
        <Row
            style={styles.wrapper}
        >
            <Col
                style={styles.textWrapper}
            >
                <p style={robotoStyles.title}>{'DOMINIC & MARY WEDDING'}</p>
                <p style={robotoStyles.large}>{'Registry and Information'}</p>
                <p style={styles.body}>{projects[WEDDING].subText}</p>
            </Col>
            <Col style={{width: '50%'}}>
                <img
                    alt={''}
                    src={require('../assets/projects/wedding1.png')}
                    style={{
                        boxShadow,
                        left: '10vw',
                        position: 'absolute',
                        top: '5vw',
                        width: '50%'
                    }}
                />
                <img
                    alt={''}
                    src={require('../assets/projects/wedding2.png')}
                    style={{
                        boxShadow,
                        left: '18vw',
                        position: 'absolute',
                        top: '8vw',
                        width: '50%',
                        zIndex: '-1'
                    }}
                />
            </Col>
        </Row>
    </Container>
);

export default Wedding;
