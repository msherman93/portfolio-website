import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {projects} from '../constants/projects';
import styles from '../css/screens/Portfolio.module.css';

export default class Portfolio extends Component {
    render() {
        return (
            <Container
                className={styles.wrapper}
                fluid
            >
                <Row>
                    {
                        projects.map((project) => (
                            <Col
                                className={styles.projectWrapper}
                                key={project.name}
                            >
                                <img
                                    alt={''}
                                    className={styles.projectImage}
                                    src={project.thumbnail}
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
