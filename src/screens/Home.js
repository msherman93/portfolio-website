import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {boxWrapper, centeredColumn} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';
import hero from '../assets/hero.png';
import Dominic from '../assets/Dominic.png';
import Michael from '../assets/Michael.png';
import Gabe from '../assets/Gabe.png';
import HomeCard from '../components/HomeCard';
import {DOMINIC, GABRIEL, MICHAEL} from '../constants/routes';

const IMAGE_HEIGHT = 375;

const styles = {
    cardsRow: {
        justifyContent: 'space-evenly',
        marginBottom: 32,
        marginTop: IMAGE_HEIGHT / 2 - 16,
        width: '100%'
    },
    image: {
        bottom: -IMAGE_HEIGHT / 2 + 16,
        height: IMAGE_HEIGHT,
        position: 'absolute',
        width: 'auto',
        zIndex: 5
    },
    wrapper: {
        ...boxWrapper,
        paddingBottom: IMAGE_HEIGHT / 2 + 32,
        position: 'relative',
        width: '100vw'
    }
};

export default class Home extends Component {
    render() {
        return (
            <Container
                fluid
                style={centeredColumn}
            >
                <div style={styles.wrapper}>
                    <p style={textStyles.playfairLarge}>{'Sherman Bros.'}</p>
                    <p style={textStyles.playfairMedium}>{'Web & Mobile Development'}</p>
                    <p style={textStyles.subHeader}>{'“Your business is unique, your website should be too."'}</p>
                    <img
                        alt={''}
                        src={hero}
                        style={styles.image}
                    />
                </div>
                <Row style={styles.cardsRow}>
                    <HomeCard
                        image={Michael}
                        route={MICHAEL}
                        subText={'UI/UX Designer and Illustrator. Designs graphic user interface elements, as well as branding and original images.'}
                        title={'Michael'}
                    />
                    <HomeCard
                        image={Dominic}
                        route={DOMINIC}
                        subText={'Full-stack software engineer, with primary experience in JavaScript, React, React-Native, and GraphQL'}
                        title={'Dominic'}
                    />
                    <HomeCard
                        image={Gabe}
                        route={GABRIEL}
                        subText={'College student who likes programming'}
                        title={'Gabriel'}
                    />
                </Row>
            </Container>
        );
    }
}
