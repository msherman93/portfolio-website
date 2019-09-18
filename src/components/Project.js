import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {textStyles} from '../styles/text-styles';
import {boxShadow, boxWrapper, cardWrapper, centeredRow} from '../styles/shared-styles';
import github from '../assets/icons/github.svg';
import link from '../assets/icons/link.png';
import appstore from '../assets/icons/appstore.png';
import playstore from '../assets/icons/playstore.png';

const styles = {
    icon: {
        width: '60%'
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
        marginBottom: '10%'
    },
    subText: {
        paddingTop: '5%'
    },
    wrapper: cardWrapper
};

export default class Project extends Component {
    _getImageWidth = () => this.props.project.square ? '50%' : '80%';

    render() {
        const {project} = this.props;

        return (
            <Col
                key={project.name}
                style={styles.wrapper}
            >
                <img
                    alt={''}
                    src={project.thumbnail}
                    style={{
                        ...styles.projectImage,
                        width: this._getImageWidth()
                    }}
                />
                <div>
                    <p style={textStyles.playfairMedium}>{project.name}</p>
                </div>
                <p style={styles.subText}>{project.subText}</p>
                <Row style={styles.iconWrapper}>
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
                                    src={playstore}
                                    style={styles.icon}
                                />
                            </a>
                            : null
                    }
                </Row>
            </Col>
        );
    }
}
