import React from 'react';
import styled from '@emotion/styled';

const Details = (props) => {

    const DetailsContainer = styled.div({
        height: '50%',
        width: '50%',
        backgroundColor: '#a8dadc',
        borderRadius: '5px',

    })

    const DetailsTitle = styled.span({
        // fontFamily: "Segoe UI",
        fontSize: '20px',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#0a122a',
        width: '70%',
        display: 'inline-block',
        margin: '24px'
    })

    const DetailsContent = styled.div`
        background-color: #f1faee;
        font-size: 20px;
        font-style: italic;
        font-weight: bold;
        color: #0a122a;
        width: 80%;
        margin: auto;
        height: 60%;
        overflow: scroll;
        border-radius: 5px;
        padding:16px;
    `

    return (
        <DetailsContainer>
            <DetailsTitle>{props.title}</DetailsTitle>
            <DetailsContent>{props.children}</DetailsContent>
        </DetailsContainer>


    );
};

export default Details