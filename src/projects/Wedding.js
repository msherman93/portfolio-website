import React from 'react';

import {robotoStyles} from '../styles/text-styles';
import {projects, WEDDING} from '../constants/projects';
import {boxShadow} from '../styles/shared-styles';
import css from '../css/Wedding.module.css';

const previewImages = {
    boxShadow,
    minWidth: 275,
    position: 'absolute',
    width: '50%'
};

const styles = {
    background: {
        minHeight: '100%',
        minWidth: 400,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    body: {
        ...robotoStyles.medium,
        paddingTop: 16
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
        right: '10vw'
    },
    logo: {
        width: '20%'
    },
    previewWrapper: {
        position: 'absolute',
        right: 0
    },
    rightImage: {
        ...previewImages,
        right: '5vw',
        top: 50,
        zIndex: '-1'
    },
    textWrapper: {
        marginTop: '4%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        padding: '5%',
        width: '100%'
    }
};

const Wedding = () => (
    <div style={{height: '100vh'}}>
        <div
            style={styles.imageWrapper}
        >
            <img
                alt={''}
                src={require('../assets/projects/weddingwebsitebackground.jpg')}
                style={styles.background}
            />
        </div>
        <div
            style={styles.wrapper}
        >
            <div
                className={css.textWrapper}
                style={styles.textWrapper}
            >
                <p style={robotoStyles.title}>{'DOMINIC & MARY WEDDING'}</p>
                <p style={robotoStyles.large}>{'Registry and Information'}</p>
                <p style={styles.body}>{projects[WEDDING].subText}</p>
            </div>
            <div
                className={css.previewWrapper}
                style={styles.previewWrapper}
            >
                <img
                    alt={''}
                    src={require('../assets/projects/wedding1.png')}
                    style={styles.leftImage}
                />
                <img
                    alt={''}
                    src={require('../assets/projects/wedding2.png')}
                    style={styles.rightImage}
                />
            </div>
        </div>
    </div>
);

export default Wedding;
