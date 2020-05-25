import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../../common/Modal';
import Details from '../../common/Details'



const Task = (props) => {

    const Container = styled.div`
    text-decoration: ${props => props.task.complete ? 'line-through;' : 'none;'}  
    width: 20%;
    height: 20%;
    min-height: 80px;
    margin: 5px;
    background-color: #06aed5;
    font-size: 13px;
    font-style: italic;
    font-weight: bold;
    color: #0a122a;
    border-radius: 5px;
    text-align: center;
    padding: 2px;
    overflow-y: hidden;
    &>span{
        display:block;
    }
    
    `
    const [state, updateState] = useState({ showModal: false })
    const showDetails = (e) => {
        updateState((state) => ({ showModal: !state.showModal }))
    }
    return (
        <Container task={props.task} onClick={showDetails}>
            <span> {props.taskStory}</span>
            <span>{props.task.description}</span>
            <Modal visible={state.showModal} className="modal" >
                <Details title={props.taskStory}>{props.task.description}</Details>
            </Modal>
        </Container>)
}

export default Task;