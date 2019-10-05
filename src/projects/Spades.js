import React from 'react';

import {robotoStyles} from '../styles/text-styles';
import {centeredRow} from '../styles/shared-styles';
import {projects, SPADES} from '../constants/projects';

const styles = {
    background: {
        position: 'absolute',
        right: 50,
        width: '80%',
        zIndex: -5
    },
    body: {
        ...robotoStyles.mediumWhite,
        paddingTop: 16
    },
    imageWrapper: {
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        width: '100vw'
    },
    leftImage: {
        left: -200,
        position: 'absolute',
        top: -300,
        width: 850,
        zIndex: -1
    },
    logo: {
        width: '75%'
    },
    rightImage: {
        bottom: -100,
        position: 'absolute',
        right: -100,
        width: 950,
        zIndex: -1
    },
    textWrapper: {
        marginLeft: '7%',
        marginTop: '2%',
        width: 400
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
};

const Spades = () => (
    <div>
        <div
            style={styles.imageWrapper}
        >
            <img
                alt={''}
                src={require('../assets/projects/left-shape.png')}
                style={styles.leftImage}
            />
            <img
                alt={''}
                src={require('../assets/projects/right-shape.png')}
                style={styles.rightImage}
            />
            <img
                alt={''}
                src={require('../assets/projects/logo-bg.png')}
                style={styles.background}
            />
            <div
                style={{
                    ...centeredRow,
                    bottom: 75,
                    justifyContent: 'space-evenly',
                    left: 0,
                    position: 'absolute',
                    width: '40%'
                }}
            >
                <a
                    href={projects[SPADES].github}
                    style={{
                        ...centeredRow
                    }}
                    target={'_blank'}
                >
                    <img
                        alt={''}
                        src={require('../assets/icons/github.png')}
                        style={styles.logo}
                    />
                </a>
                <a
                    href={projects[SPADES].appStoreLink}
                    style={{
                        ...centeredRow
                    }}
                    target={'_blank'}
                >
                    <img
                        alt={''}
                        src={require('../assets/icons/app-store.png')}
                        style={styles.logo}
                    />
                </a>
                <a
                    href={projects[SPADES].playStoreLink}
                    style={{
                        ...centeredRow
                    }}
                    target={'_blank'}
                >
                    <img
                        alt={''}
                        src={require('../assets/icons/google-play.png')}
                        style={styles.logo}
                    />
                </a>
            </div>
            <img
                alt={''}
                src={require('../assets/projects/phones.png')}
                style={{
                    bottom: '8vw',
                    position: 'absolute',
                    right: '12vw',
                    width: '40%'
                }}
            />
        </div>
        <div
            style={styles.wrapper}
        >
            <div
                style={styles.textWrapper}
            >
                <p style={robotoStyles.titleWhite}>{'SPADES SCORE'}</p>
                <p style={robotoStyles.largeWhite}>{'Mobile App for iOS and Android'}</p>
                <p style={styles.body}>{projects[SPADES].subText}</p>
            </div>
        </div>
    </div>
);

export default Spades;
