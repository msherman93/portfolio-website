import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {projects} from './constants/projects';
import styles from './css/App.module.css';
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <Container
                className={styles.wrapper}
                fluid
            >
                <NavBar />
                <Row style={{paddingTop: 80}}>
                    {
                        projects.map((project) => (
                            <Col
                                key={project.name}
                                className={styles.projectWrapper}
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

export default App;
