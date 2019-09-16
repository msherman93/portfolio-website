import React, {Component} from 'react';

import {textStyles} from '../styles/text-styles';
import {cardWrapper} from '../styles/shared-styles';

const styles = {
    image: {
        paddingTop: 16,
        width: '80%'
    },
    wrapper: {
        ...cardWrapper,
        width: '25vw'
    }
};

export default class HomeCard extends Component {
    render() {
        const {image, title, subText} = this.props;

        return (
            <div style={styles.wrapper}>
                <img
                    src={image}
                    style={styles.image}
                />
                <p style={textStyles.playfairMedium}>{title}</p>
                <p style={{paddingTop: 16}}>{subText}</p>
            </div>
        );
    }
}
