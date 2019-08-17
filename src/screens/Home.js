import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

import sharedStyles from '../css/SharedStyles.module.css';
import textStyles from '../css/TextStyles.module.css';
import styles from '../css/screens/Home.module.css';
import homePicture from '../assets/HomePicture.jpg';

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <div
                    className={sharedStyles.wrapper}
                >
                    <h2
                        style={{
                            paddingBottom: 25,
                            textAlign: 'center'
                        }}
                    >{'Sherman Brothers Web & Mobile Development'}
                    </h2>
                    <p
                        className={textStyles.blueBodyText}
                        style={{paddingBottom: 25}}
                    >
                        {'“Your business is unique, your website should be too."'}
                    </p>
                    <img
                        alt={''}
                        className={styles.picture}
                        src={homePicture}
                    />
                </div>
            </Container>
        );
    }
}
