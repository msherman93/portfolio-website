import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';

import {textStyles} from '../styles/text-styles';
import {boxWrapper} from '../styles/shared-styles';

const styles = {
    projectImage: {
        borderRadius: 25,
        height: 'auto',
        marginBottom: '10%'
    },
    subText: {
        ...textStyles.blueBodyText,
        paddingTop: '5%'
    }
};

export default class Project extends Component {
    _getImageWidth = () => this.props.project.square ? '50%' : '80%';

    render() {
        const {project} = this.props;

        return (
            <Col
                key={project.name}
                style={boxWrapper}
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
                    <p style={textStyles.blueHeaderText}>{project.name}</p>
                </div>
                <p style={styles.subText}>{project.subText}</p>
            </Col>
        );
    }
}
