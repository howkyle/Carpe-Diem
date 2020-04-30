import React from 'react';
import StoryList from './StoryList';
import TaskList from './TaskList';


const WorkSet = (props) => (<div className={props.className}>
    <StoryList stories={props.user.stories} className="workset-storylist"></StoryList>
    <TaskList stories={props.user.stories} className="workset-started"></TaskList>
    <TaskList stories={props.user.stories} className="workset-completed"></TaskList>
    <StoryList stories={props.user.stories} className="workset-storylist"></StoryList>
</div>);

export default WorkSet;