import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {robotoStyles} from '../styles/text-styles';
import {boxShadow} from '../styles/shared-styles';
import {MOSS_ROCK, projects} from '../constants/projects';
import css from '../css/MossRock.module.css';

const styles = {
    body: {
        ...robotoStyles.mediumWhite,
        paddingTop: 16
    },
    image: {
        bottom: 0,
        minHeight: '100%',
        position: 'absolute',
        width: '100%'
    },
    imageWrapper: {
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        width: '100vw',
        zIndex: -5
    },
    textWrapper: {
        padding: '2%',
        width: '50%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        padding: '5%',
        width: '100%'
    }
};

const colProps = {
    lg: 6,
    md: 12,
    sm: 12,
    xs: 12
};

const MossRockLandscaping = () => (
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
                src={require('../assets/projects/mossrockbackground.jpg')}
                style={styles.image}
            />
        </div>
        <Row
            style={styles.wrapper}
        >
            <Col
                style={styles.textWrapper}
                {...colProps}
            >
                <p style={robotoStyles.titleWhite}>{'MOSS ROCK LANDSCAPING'}</p>
                <p style={robotoStyles.largeWhite}>{'Premier Landscape Design Firm'}</p>
                <p style={styles.body}>{projects[MOSS_ROCK].subText}</p>
            </Col>
            <Col
                className={css.imageWrapper}
                style={{
                    height: '100vw',
                    overflow: 'hidden',
                    width: '50%'
                }}
            >
                <img
                    alt={''}
                    src={require('../assets/projects/mossrock1.png')}
                    style={{
                        boxShadow,
                        left: '10vw',
                        position: 'absolute',
                        width: '50%'
                    }}
                />
                <img
                    alt={''}
                    src={require('../assets/projects/mossrock2.png')}
                    style={{
                        boxShadow,
                        left: '18vw',
                        position: 'absolute',
                        top: '3vw',
                        width: '50%',
                        zIndex: -1
                    }}
                />
            </Col>
        </Row>
    </Container>
);

export default MossRockLandscaping;
