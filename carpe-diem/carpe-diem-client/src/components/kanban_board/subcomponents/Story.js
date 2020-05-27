import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../../common/Modal';
import Details from '../../common/Details'



const Story = (props) => {

    const Container = styled.div({
        display: 'block',
        backgroundColor: '#f1faee',
        // fontFamily: "Segoe UI",
        fontSize: '18px',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#0a122a',
        margin: '24px',
        borderRadius: '5px',
        height: '48px',
        overflow: 'hidden',
        padding: '8px'
    })
    const [state, updateState] = useState({ showModal: false })
    const showDetails = (e) => {
        updateState((state) => ({ showModal: !state.showModal }))
    }

    return (
        <Container onClick={showDetails}>
            <span>{props.story.name}</span>
            <Modal visible={state.showModal}><Details title={props.story.name}>{props.story.description}</Details></Modal>
        </Container>)
}

export default Story;