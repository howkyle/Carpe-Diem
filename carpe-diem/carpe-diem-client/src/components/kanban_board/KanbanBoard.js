// import React from 'react';
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import KanbanHeader from './subcomponents/KanbanHeader';
import KanbanGrid from './subcomponents/KanbanGrid';
import WorkSet from './subcomponents/WorkSet';
import './Kanban.css';
import { getUsers, getStories } from '../../api/pivotalService';


const KanbanBoard = (props) => {

    const BoardContainer = styled.div({
        width: '90%',
        height: '800px',
        margin: 'auto',
    })

    const { id } = useParams();

    useEffect(() => {

        let fetchUsers = async () => {
            return props.boardState.users.updateUsers(await getUsers(id))
        }
        let fetchStories = async () => {
            props.boardState.stories.updateStories(await getStories(id))
        }
        fetchUsers();
        fetchStories();
    }, []);


    return (
        <BoardContainer>
            <KanbanHeader />
            <KanbanGrid>
                {props.boardState.users.usersState.map(user => <WorkSet key={user.person.id} user={user.person} stories={props.boardState.stories.storiesState}></WorkSet>)}
            </KanbanGrid>

        </BoardContainer>)


}

export default KanbanBoard;