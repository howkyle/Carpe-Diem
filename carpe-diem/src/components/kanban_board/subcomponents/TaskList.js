import React from 'react';
import Task from './Task';

const TaskList = (props) => (
    <div class={props.className}>

        {
            props.stories.map(story =>
                story.tasks.map(task =>

                    task.complete === props.active ? <Task className="story-task" taskStory={story.id} taskDetails={task.description}>

                    </Task> : null
                )
            )

        }

    </div>);

export default TaskList;