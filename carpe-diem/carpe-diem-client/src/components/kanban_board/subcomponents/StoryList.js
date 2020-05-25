import React from 'react';
import styled from '@emotion/styled';
import Story from './Story';

const StoryList = (props) => {

    const Container = styled.div({
        width: '22%',
        float: 'left',
        backgroundColor: '#a8dadc',
        borderRadius: '5px',
        margin: 'auto',
        height: '300px'
    })

    const Header = styled.div({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "10px"
    })

    const List = styled.div({
        overflowY: 'scroll',
        height: '200px'
    })
    return (
        <Container>
            <Header>{props.children}</Header>
            <List>
                {props.stories.map(story => <Story key={story.id} story={story} className="storylist-story"></Story>)}
            </List>
        </Container>
    )
};


export default StoryList;