import React, {Component} from 'react';
import ReactPageScroller from 'react-page-scroller';

import MossRockLandscaping from '../projects/MossRockLandscaping';

export default class Portfolio extends Component {
    render() {
        return (
            <ReactPageScroller
                transitionTimingFunction={'ease'}
            >
                <MossRockLandscaping />
                <MossRockLandscaping />
            </ReactPageScroller>
        );
    }
}
