import React, { useState } from 'react';
import Modal from '../../common/Modal';
import Details from '../../common/Details'



const Task = (props) => {
    const [state, updateState] = useState({ showModal: false })
    const showDetails = (e) => {
        updateState((state) => ({ showModal: !state.showModal }))
    }
    return (
        <div onClick={showDetails} class={props.className}>
            <span> {props.taskStory}</span>
            <span>{props.taskDetails}</span>
            <Modal visible={state.showModal} className="modal" ><Details title={props.taskStory}>{props.taskDetails}</Details></Modal>

        </div>)
}

export default Task;