import React, { useReducer } from 'react';
import StoryList from './StoryList';
import TaskList from './TaskList';
import Avatar from './Avatar';


const WorkSet = (props) => {

    let stories = props.stories.filter(story => story.current_state != "planned" && story.owned_by.id == props.user.id)
    console.log("workset", stories)

    // let stories = props.stories.filter(story => story.owned_by.id == props.user.id)
    return (<div className={props.className}>
        <StoryList stories={stories.filter(story => story.current_state != "finished")} className="workset-storylist"> <Avatar className="avatar">{props.user.initials}</Avatar></StoryList>
        <TaskList stories={stories} complete={false} className="workset-started"></TaskList>
        <TaskList stories={stories} complete={true} className="workset-completed"></TaskList>
        <StoryList stories={stories.filter(story => story.current_state == "finished")} className="workset-storylist"></StoryList>
    </div>)
};

export default WorkSet;