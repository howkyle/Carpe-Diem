import React, { useState } from 'react';
import Modal from '../../common/Modal';
import Details from '../../common/Details'



const Story = (props) => {

    const [state, updateState] = useState({ showModal: false })
    const showDetails = (e) => {
        updateState((state) => ({ showModal: !state.showModal }))
    }

    return (
        <div onClick={showDetails}>
            <span class={props.className}>{props.story.name}</span>
            <Modal visible={state.showModal} className="modal" ><Details title={props.story.name}>{props.story.description}</Details></Modal>
        </div>)
}

export default Story;