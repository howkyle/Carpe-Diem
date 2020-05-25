import React from 'react';
import styled from '@emotion/styled';

const KanbanHeader = (props) => {

    const ColumnHeader = styled.span({
        display: 'inline-block',
        /* width: 285px, */
        width: '22%',
        margin: 'auto',
        height: '63px',
        backgroundColor: ' #06aed5',
        color: '#f1faee',
        fontSize: '36px',
        fontFamily: "Segoe UI",
        fontStyle: 'italic',
        fontWeight: "bold",
        borderRadius: '5px',
        overflow: 'hidden',
    })

    const HeaderContainer = styled.div({
        display: 'flex',
        margin: '16px'
    })
    return (
        <HeaderContainer><ColumnHeader>Stories</ColumnHeader>
            <ColumnHeader>Current Tasks</ColumnHeader>
            <ColumnHeader>Completed Tasks</ColumnHeader>
            <ColumnHeader>Testing</ColumnHeader>
        </HeaderContainer>)

}

export default KanbanHeader;