import React from 'react';
import Story from './Story';

const StoryList = (props) => (
    <div class={props.className}>
        <div class="storylist-header">{props.children}</div>
        <div class="storylist-stories">
            {props.stories.map(story => <Story key={story.id} story={story} className="storylist-story"></Story>)}
        </div>

    </div>);


export default StoryList;