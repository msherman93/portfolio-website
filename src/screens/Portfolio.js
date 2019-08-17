import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {projects} from '../constants/projects';

const styles = {
    projectImage: {
        borderRadius: 25,
        height: 'auto',
        width: '60%'
    },
    projectWrapper: {
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 4,
        padding: 8
    },
    wrapper: {
        padding: 8
    }
};

export default class Portfolio extends Component {
    render() {
        return (
            <Container
                fluid
                style={styles.wrapper}
            >
                <Row>
                    {
                        projects.map((project) => (
                            <Col
                                key={project.name}
                                style={styles.projectWrapper}
                            >
                                <img
                                    alt={''}
                                    src={project.thumbnail}
                                    style={styles.projectImage}
                                />
                                <p>
                                    {project.name}
                                </p>
                                <p>
                                    {project.subText}
                                </p>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}
