import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {textStyles} from '../styles/text-styles';
import {cardWrapper} from '../styles/shared-styles';

const styles = {
    image: {
        paddingTop: 16,
        width: '80%'
    },
    wrapper: {
        ...cardWrapper,
        textDecoration: 'none',
        width: '25vw'
    }
};

export default class HomeCard extends Component {
    render() {
        const {image, title, subText, route} = this.props;

        return (
            <Link
                style={styles.wrapper}
                to={route}
            >
                <img
                    alt={''}
                    src={image}
                    style={styles.image}
                />
                <p style={textStyles.playfairMedium}>{title}</p>
                <p style={{paddingTop: 16}}>{subText}</p>
            </Link>
        );
    }
}
