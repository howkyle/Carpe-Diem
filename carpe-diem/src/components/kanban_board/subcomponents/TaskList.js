import React from 'react';
import Task from './Task';

const TaskList = (props) => (
    <div class={props.className}>

        {
            props.stories.map(story =>
                story.tasks.map(task =>
                    <Task className="story-task" taskStory={story.storyName} taskDetails={task.details}>
                    </Task>
                )
            )

        }

    </div>);

export default TaskList;