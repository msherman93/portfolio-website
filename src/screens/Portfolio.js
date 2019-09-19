import React, {Component} from 'react';
import ReactPageScroller from 'react-page-scroller';

import {projects} from '../constants/projects';
import Project from '../components/Project';

export default class Portfolio extends Component {
    render() {
        return (
            <ReactPageScroller
                transitionTimingFunction={'ease'}
            >
                {
                    projects.map((project, index) =>
                        <Project
                            index={index}
                            key={project.name}
                            project={project}
                        />
                    )
                }
            </ReactPageScroller>
        );
    }
}
