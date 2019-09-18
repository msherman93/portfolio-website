import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {textStyles} from '../styles/text-styles';
import {centeredColumn, centeredRow} from '../styles/shared-styles';
import github from '../assets/icons/github.svg';
import link from '../assets/icons/link.png';
import appstore from '../assets/icons/appstore.png';
import playstore from '../assets/icons/playstore.png';

const styles = {
    icon: {
        width: '40%'
    },
    iconLink: {
        ...centeredRow,
        width: '30%'
    },
    iconWrapper: {
        ...centeredRow,
        justifyContent: 'space-evenly',
        paddingTop: '7%',
        width: '70%'
    },
    projectImage: {
        borderRadius: 25,
        height: 'auto',
        marginBottom: '10%',
        width: '50%'
    },
    subText: {
        paddingTop: '5%'
    },
    wrapper: {
        ...centeredRow,
        height: '100vh',
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '100%'
    }
};

export default class Project extends Component {
    _getImage = () =>
        <Col
            lg={'4'}
            style={centeredColumn}
        >
            <img
                alt={''}
                src={this.props.project.thumbnail}
                style={styles.projectImage}
            />
        </Col>;

    _getLeftImage = () => this.props.index % 2 === 1 && this._getImage();

    _getRightImage = () => this.props.index % 2 === 0 && this._getImage();

    render() {
        const {project} = this.props;

        return (
            <Row
                style={styles.wrapper}
            >
                {this._getLeftImage()}
                <Col
                    lg={'8'}
                    style={{width: '70%'}}
                >
                    <p style={textStyles.playfairLarge}>{project.name}</p>
                    <p style={styles.subText}>{project.subText}</p>
                    <Row
                        style={styles.iconWrapper}
                    >
                        <a
                            href={project.github}
                            style={styles.iconLink}
                            target={'_blank'}
                        >
                            <img
                                alt={''}
                                src={github}
                                style={styles.icon}
                            />
                        </a>
                        {
                            project.link ?
                                <a
                                    href={project.link}
                                    style={styles.iconLink}
                                    target={'_blank'}
                                >
                                    <img
                                        alt={''}
                                        src={link}
                                        style={styles.icon}
                                    />
                                </a>
                                : null
                        }
                        {
                            project.appStoreLink ?
                                <a
                                    href={project.appStoreLink}
                                    style={styles.iconLink}
                                    target={'_blank'}
                                >
                                    <img
                                        alt={''}
                                        src={appstore}
                                        style={styles.icon}
                                    />
                                </a>
                                : null
                        }
                        {
                            project.playStoreLink ?
                                <a
                                    href={project.playStoreLink}
                                    style={styles.iconLink}
                                    target={'_blank'}
                                >
                                    <img
                                        alt={''}
                                        src={playstore}
                                        style={styles.icon}
                                    />
                                </a>
                                : null
                        }
                    </Row>
                </Col>
                {this._getRightImage()}
            </Row>
        );
    }
}
