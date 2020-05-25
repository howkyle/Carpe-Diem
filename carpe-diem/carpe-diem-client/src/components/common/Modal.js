import React from 'react';
import styled from '@emotion/styled';


const Modal = (props) => {

    const ModalContainer = styled.div({
        zIndex: 1,
        backgroundColor: '#f1faeeb8',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px'
    })

    if (!props.visible) {
        console.log(props)
        return null;
    }
    else {
        return (
            // <div class={props.className}>
            //     {props.children}
            // </div>
            <ModalContainer>{props.children}</ModalContainer>
        )
    }

}


export default Modal;