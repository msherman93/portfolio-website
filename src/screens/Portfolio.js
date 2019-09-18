// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-array-index-key */
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import {projects} from '../constants/projects';
import Project from '../components/Project';

const styles = {
    wrapper: {
        margin: 0,
        padding: 0,
        width: '100%'
    }
};

export default class Portfolio extends Component {
    render() {
        return (
            <Container
                fluid
                noGutters
                style={styles.wrapper}
            >
                <Col>
                    {
                        projects.map((project, index) =>
                            <Project
                                index={index}
                                key={project.name}
                                project={project}
                            />
                        )
                    }
                </Col>
            </Container>
        );
    }
}
