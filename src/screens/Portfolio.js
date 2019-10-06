import React from 'react';
import ReactPageScroller from 'react-page-scroller';

import MossRockLandscaping from '../projects/MossRockLandscaping';
import Spades from '../projects/Spades';
import Wedding from '../projects/Wedding';

const Porfolio = () => (
    <ReactPageScroller
        transitionTimingFunction={'ease'}
    >
        <MossRockLandscaping />
        <Spades />
        <Wedding />
    </ReactPageScroller>
);

export default Porfolio;
