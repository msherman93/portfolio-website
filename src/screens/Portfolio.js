// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-array-index-key */
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {projects} from '../constants/projects';
import Project from '../components/Project';

const styles = {
    wrapper: {
        width: '100%'
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
                        projects.map((project, index) =>
                            <Project
                                key={index}
                                project={project}
                            />
                        )
                    }
                </Row>
            </Container>
        );
    }
}
