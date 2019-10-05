import React from 'react';
import ReactPageScroller from 'react-page-scroller';

import MossRockLandscaping from '../projects/MossRockLandscaping';
import Spades from '../projects/Spades';
import Wedding from '../projects/Wedding';

const Porfolio = () => (
    <ReactPageScroller
        transitionTimingFunction={'ease'}
    >
        <Wedding />
        <Spades />
        <MossRockLandscaping />
    </ReactPageScroller>
);

export default Porfolio;
