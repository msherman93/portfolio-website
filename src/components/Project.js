import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';

const styles = {
    projectImage: {
        borderRadius: 25,
        height: 'auto',
        marginBottom: '10%'
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
    }
};

export default class Project extends Component {
    _getImageWidth = () => this.props.project.square ? '45%' : '80%';

    render() {
        const {project} = this.props;

        return (
            <Col
                key={project.name}
                style={styles.projectWrapper}
            >
                <img
                    alt={''}
                    src={project.thumbnail}
                    style={{
                        ...styles.projectImage,
                        width: this._getImageWidth()
                    }}
                />
                {
                    project.link ?
                        <a
                            href={project.link}
                            target={'_blank'}
                        >
                            {project.name}
                        </a>
                        :
                        <div>
                            <p>{project.name}</p>
                        </div>
                }
            </Col>
        );
    }
}
