import React from 'react';
import styled from '@emotion/styled';



const Avatar = (props) => {

    const AvatarContainer = styled.div({
        backgroundColor: '#06aed5',
        borderRadius: '5px',
        color: '#0a122a',
        //   font-family: "Segoe UI",
        fontSize: '20px',
        fontWeight: 'bold',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    })
    return (<AvatarContainer><span>{props.children}</span></AvatarContainer>)
}
export default Avatar;