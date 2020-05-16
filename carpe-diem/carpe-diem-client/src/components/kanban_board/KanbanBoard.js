// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KanbanHeader from './subcomponents/KanbanHeader';
import KanbanGrid from './subcomponents/KanbanGrid';
import WorkSet from './subcomponents/WorkSet';
import './Kanban.css';
import { getUsers, getCurrentIteration } from '../../api/pivotalService';


const KanbanBoard = (props) => {

    const { id } = useParams();

    useEffect(() => {

        let fetchUsers = async () => {
            let userList = await getUsers(id);
            console.log("userlist", userList);
            return props.boardState.users.updateUsers(userList)
        }

        fetchUsers();


    }, []);


    useEffect(() => {

        let fetchStories = async () => {
            let iteration = await getCurrentIteration(id);
            let stories = iteration[0].stories;
            props.boardState.stories.updateStories(stories)
        }
        fetchStories();
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