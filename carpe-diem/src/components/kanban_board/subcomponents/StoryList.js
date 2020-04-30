import React from 'react';
import Story from './Story';

const StoryList = (props) => (
    <div class={props.className}>
        {props.stories.map(story => <Story story={story} className="storylist-story"></Story>)}
        {/* <Story className="storylist-story"></Story>
        <Story className="storylist-story"></Story>
        <Story className="storylist-story"></Story> */}

    </div>);


export default StoryList;