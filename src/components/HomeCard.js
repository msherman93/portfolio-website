import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import {textStyles} from '../styles/text-styles';
import {cardWrapper} from '../styles/shared-styles';

const styles = {
    image: {
        paddingTop: 16,
        width: 180
    },
    wrapper: {
        ...cardWrapper,
        height: '100%',
        padding: 16,
        textDecoration: 'none'
    }
};

export default class HomeCard extends Component {
    render() {
        const {image, title, subText, route} = this.props;

        return (
            <Col
                lg={'3'}
                md={'5'}
                sm={'9'}
                style={{margin: 16}}
                xs={'12'}
            >
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
            </Col>
        );
    }
}
