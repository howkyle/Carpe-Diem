import React from 'react'
import Details from '../../common/Details'


const StoryDetails = (props) => (
    <Details title={props.story.name}>{props.story.description}</Details>
)


export default StoryDetails;