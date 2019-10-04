import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';

import {boxWrapper, centeredColumn, centeredRow} from '../styles/shared-styles';
import {playfairStyles} from '../styles/text-styles';

const styles = {
    button: {
        width: '28%'
    },
    buttonWrapper: {
        ...centeredRow,
        paddingTop: '1%',
        width: '100%'
    },
    input: {
        margin: '1%'
    }
};

export default class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            address: '',
            email: '',
            name: '',
            projectInfo: ''
        };

        this.state = this.initialState;
    }

    _handleSubmit = () => {
        this._resetState();
    };

    _setState = (field) => (event) => this.setState({[field]: event.target.value});

    _resetState = () => this.setState(this.initialState);

    render() {
        return (
            <Container
                fluid
                style={{
                    ...boxWrapper,
                    width: '100vw'
                }}
            >
                <p style={playfairStyles.medium}>{'Contact Us'}</p>
                <p style={{paddingTop: 16}}>{'If you have a need for a web or mobile application, small or large, contact us below!'}</p>
                <Form style={{paddingTop: 16}}>
                    <Row>
                        <Col
                            lg={'4'}
                            style={{
                                ...centeredColumn,
                                justifyContent: 'space-evenly',
                                width: '35vw'
                            }}
                            xs={'12'}
                        >
                            <Form.Control
                                onChange={this._setState('name')}
                                placeholder={'Name'}
                                size={'sm'}
                                style={styles.input}
                                value={this.state.name}
                            />
                            <Form.Control
                                onChange={this._setState('email')}
                                placeholder={'Email Address'}
                                size={'sm'}
                                style={styles.input}
                                value={this.state.email}
                            />
                            <Form.Control
                                onChange={this._setState('phone')}
                                placeholder={'Phone'}
                                size={'sm'}
                                style={styles.input}
                                value={this.state.phone}
                            />
                        </Col>
                        <Col className={centeredColumn}>
                            <Form.Control
                                as={'textarea'}
                                onChange={this._setState('projectInfo')}
                                placeholder={'Tell us about your project!'}
                                rows={5}
                                size={'sm'}
                                value={this.state.projectInfo}
                            />
                        </Col>
                    </Row>
                </Form>
                <Row style={styles.buttonWrapper}>
                    <Button
                        onClick={this._handleSubmit}
                        size={'lg'}
                        style={styles.button}
                        variant={'success'}
                    >
                        {'Submit'}
                    </Button>
                </Row>
            </Container>
        );
    }
}
