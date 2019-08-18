import React, {Component} from 'react';

import {boxWrapper} from '../styles/shared-styles';
import {textStyles} from '../styles/text-styles';

export default class ContactUs extends Component {
    render() {
        return (
            <div style={{height: window.innerHeight}}>
                <div style={boxWrapper}>
                    <h2>{'Contact Us'}</h2>
                    <p style={textStyles.blueBodyText}>{'If you have a need for a web or mobile application, small or large, contact us below!'}</p>
                </div>
            </div>
        );
    }
}
