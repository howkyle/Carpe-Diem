import React from 'react';
import KanbanHeader from './subcomponents/KanbanHeader';
import KanbanGrid from './subcomponents/KanbanGrid';
import WorkSet from './subcomponents/WorkSet';
import './Kanban.css';



const KanbanBoard = (props) => {
    let users = props.boardState.users.filter(user => user.role === "member")

    return (<div class={props.className}>
        <KanbanHeader className="kanban-header"></KanbanHeader>
        <KanbanGrid className="kanban-grid">
            {users.map(user => <WorkSet key={user.person.id} user={user.person} stories={props.boardState.stories} className="workset"></WorkSet>)}
        </KanbanGrid>

    </div>)
}





export default KanbanBoard;