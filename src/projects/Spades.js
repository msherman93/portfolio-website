import React from 'react';

import {robotoStyles} from '../styles/text-styles';
import {centeredRow} from '../styles/shared-styles';
import {projects, SPADES} from '../constants/projects';
import css from '../css/Spades.module.css';

const styles = {
    background: {
        position: 'absolute',
        right: 50,
        top: 0,
        width: '100%',
        zIndex: -5
    },
    body: {
        ...robotoStyles.mediumWhite,
        paddingTop: 16
    },
    iconsWrapper: {
        ...centeredRow,
        bottom: 110,
        justifyContent: 'space-evenly',
        left: 0,
        position: 'absolute'
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
    previewImage: {
        minWidth: 350,
        position: 'absolute',
        right: '12vw',
        top: '20vh',
        width: '40%'
    },
    rightImage: {
        bottom: -100,
        position: 'absolute',
        right: -100,
        width: '65%',
        zIndex: -1
    },
    textWrapper: {
        marginLeft: 75,
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
                className={css.rightSide}
                src={require('../assets/projects/right-shape.png')}
                style={styles.rightImage}
            />
            <img
                alt={''}
                src={require('../assets/projects/logo-bg.png')}
                style={styles.background}
            />
            <div
                className={css.iconsWrapper}
                style={styles.iconsWrapper}
            >
                <a
                    href={projects[SPADES].github}
                    style={centeredRow}
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
                    style={centeredRow}
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
                    style={centeredRow}
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
                className={css.rightSide}
                src={require('../assets/projects/phones.png')}
                style={styles.previewImage}
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
