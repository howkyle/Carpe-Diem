import React from 'react';
import styled from '@emotion/styled';
import Task from './Task';

const TaskList = (props) => {

    const Container = styled.div`
            width: 22%;
            height: 300px;
            float: left;
            background-color: #a8dadc;
            border-radius: 5px;
            margin: auto;
            display: flex;
            overflow-y: scroll;
            flex-wrap: wrap;
            // padding:10px;
        `


    return (
        <Container>

            {
                props.stories.map(story =>
                    story.tasks.map(task =>

                        task.complete === props.complete ? <Task taskStory={story.id} task={task}>

                        </Task> : null
                    )
                )

            }

        </Container>)
};

export default TaskList;