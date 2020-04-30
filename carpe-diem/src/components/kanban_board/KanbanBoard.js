import React from 'react';
import KanbanHeader from './subcomponents/KanbanHeader';
import WorkSet from './subcomponents/WorkSet';
import './Kanban.css';



const KanbanBoard = (props) =>
    (<div class={props.className}>
        <KanbanHeader className="kanban-header"></KanbanHeader>

        {props.board.users.map(user => <WorkSet user={user} className="workset"></WorkSet>)}

    </div>)




export default KanbanBoard;