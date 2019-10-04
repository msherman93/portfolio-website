import React, {Component} from 'react';
import ReactPageScroller from 'react-page-scroller';

import MossRockLandscaping from '../projects/MossRockLandscaping';
import Spades from '../projects/Spades';

export default class Portfolio extends Component {
    render() {
        return (
            <ReactPageScroller
                transitionTimingFunction={'ease'}
            >
                <Spades />
                <MossRockLandscaping />
            </ReactPageScroller>
        );
    }
}
