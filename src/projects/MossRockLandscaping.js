import React from 'react';

import {robotoStyles} from '../styles/text-styles';
import {boxShadow} from '../styles/shared-styles';
import {MOSS_ROCK, projects} from '../constants/projects';
import css from '../css/MossRock.module.css';

const previewImages = {
    boxShadow,
    minWidth: 275,
    position: 'absolute',
    width: '48%'
};

const styles = {
    body: {
        ...robotoStyles.mediumWhite,
        paddingTop: 16
    },
    image: {
        bottom: 0,
        minHeight: '100%',
        position: 'absolute',
        width: '100%'
    },
    imageWrapper: {
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        width: '100vw',
        zIndex: -5
    },
    leftImage: {
        ...previewImages,
        right: '15vw',
        top: 30
    },
    previewWrapper: {
        height: '100vw',
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        width: '50%'
    },
    rightImage: {
        ...previewImages,
        right: '7vw',
        top: 50,
        zIndex: -1
    },
    textWrapper: {
        padding: '2%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        width: '100%'
    }
};

const MossRockLandscaping = () => (
    <div>
        <div
            style={styles.imageWrapper}
        >
            <img
                alt={''}
                src={require('../assets/projects/mossrockbackground.jpg')}
                style={styles.image}
            />
        </div>
        <div
            style={styles.wrapper}
        >
            <div
                className={css.textWrapper}
                style={styles.textWrapper}
            >
                <p style={robotoStyles.titleWhite}>{'MOSS ROCK LANDSCAPING'}</p>
                <p style={robotoStyles.largeWhite}>{'Premier Landscape Design Firm'}</p>
                <p style={styles.body}>{projects[MOSS_ROCK].subText}</p>
            </div>
            <div
                className={css.previewWrapper}
                style={styles.previewWrapper}
            >
                <img
                    alt={''}
                    src={require('../assets/projects/mossrock1.png')}
                    style={styles.leftImage}
                />
                <img
                    alt={''}
                    src={require('../assets/projects/mossrock2.png')}
                    style={styles.rightImage}
                />
            </div>
        </div>
    </div>
);

export default MossRockLandscaping;
