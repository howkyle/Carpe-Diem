import React from 'react';
import ColumnHeader from './ColumnHeader'


const KanbanHeader = (props) => (<div class={props.className}>
    <ColumnHeader className="kanban-header-title" title="Stories"></ColumnHeader>
    <ColumnHeader className="kanban-header-title" title="Current Tasks"></ColumnHeader>
    <ColumnHeader className="kanban-header-title" title="Completed Tasks"></ColumnHeader>
    <ColumnHeader className="kanban-header-title" title="Testing"></ColumnHeader>

</div>)


export default KanbanHeader;