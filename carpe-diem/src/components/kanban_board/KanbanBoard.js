// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KanbanHeader from './subcomponents/KanbanHeader';
import KanbanGrid from './subcomponents/KanbanGrid';
import WorkSet from './subcomponents/WorkSet';
import './Kanban.css';
import { getUsers, getStoriesInCurrentIteration } from '../../api/pivotalService';


const KanbanBoard = (props, { match }) => {

    const { id } = useParams();

    const loadUsers = (response) => {
        let users = response.data;
        return props.boardState.users.updateUsers(users)
    }


    const loadStoriesIteration = (response) => {
        console.log(response)
        let stories = response.data[0].stories
        return props.boardState.stories.updateStories(stories)
    }



    useEffect(() => {
        getUsers(id, loadUsers)
    }, []);


    useEffect(() => {
        getStoriesInCurrentIteration(id, loadStoriesIteration)

    }, [])


    let users = props.boardState.users.usersState.filter(user => user.role === "member")

    return (<div class={props.className}>
        <KanbanHeader className="kanban-header"></KanbanHeader>
        <KanbanGrid className="kanban-grid">
            {users.map(user => <WorkSet key={user.person.id} user={user.person} stories={props.boardState.stories.storiesState} className="workset"></WorkSet>)}
        </KanbanGrid>

    </div>)
}





export default KanbanBoard;