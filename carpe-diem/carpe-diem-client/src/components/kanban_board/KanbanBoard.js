// import React from 'react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KanbanHeader from './subcomponents/KanbanHeader';
import KanbanGrid from './subcomponents/KanbanGrid';
import WorkSet from './subcomponents/WorkSet';
import './Kanban.css';
import { getUsers, getStories } from '../../api/pivotalService';


const KanbanBoard = (props) => {

    const { id } = useParams();

    useEffect(() => {

        let fetchUsers = async () => {
            return props.boardState.users.updateUsers(await getUsers(id))
        }

        fetchUsers();


    }, []);


    useEffect(() => {

        let fetchStories = async () => {
            props.boardState.stories.updateStories(await getStories(id))
        }
        fetchStories();
    }, [])


    return (<div class={props.className}>
        <KanbanHeader className="kanban-header"></KanbanHeader>
        <KanbanGrid className="kanban-grid">
            {props.boardState.users.usersState.map(user => <WorkSet key={user.person.id} user={user.person} stories={props.boardState.stories.storiesState} className="workset"></WorkSet>)}
        </KanbanGrid>

    </div>)


}

export default KanbanBoard;