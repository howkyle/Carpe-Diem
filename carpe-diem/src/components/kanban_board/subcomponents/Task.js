import React from 'react';

const Task = (props) => (
    <div class={props.className}>
        <span> {props.taskStory}</span>
        <span>{props.taskDetails}</span>
    </div>)

export default Task;