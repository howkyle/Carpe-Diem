import React from 'react';
import styled from '@emotion/styled';
import StoryList from './StoryList';
import TaskList from './TaskList';
import Avatar from './Avatar';


const WorkSet = (props) => {

    const WorkSetContainer = styled.div({
        display: 'flex',
        margin: '10px',
        minHeight: '25%'
    })

    let stories = props.stories.filter(story => story.current_state != "planned" && story.current_state != "accepted" && story.owned_by.id == props.user.id)

    // let stories = props.stories.filter(story => story.owned_by.id == props.user.id)
    return (<WorkSetContainer>
        <StoryList stories={stories.filter(story => story.current_state != "finished")} className="workset-storylist"> <Avatar className="avatar">{props.user.initials}</Avatar></StoryList>
        <TaskList stories={stories} complete={false}></TaskList>
        <TaskList stories={stories} complete={true} ></TaskList>
        <StoryList stories={stories.filter(story => story.current_state == "finished")} className="workset-storylist"></StoryList>
    </WorkSetContainer>)
};

export default WorkSet;