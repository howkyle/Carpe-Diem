import React from 'react';
import styled from '@emotion/styled';

const KanbanGrid = (props) => {
    const GridContainer = styled.div({
        overflow: 'scroll',
        height: '90%'
    })
    return (<GridContainer>{props.children}</GridContainer>)
}
export default KanbanGrid;