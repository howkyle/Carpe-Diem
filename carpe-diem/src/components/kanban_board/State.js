import React from 'react';


const initialState = {
    users: [{
        username: "KH",
        stories: [{
            storyName: "Story1",
            tasks: [{
                details: "this is the first thing to do"
            },
            {
                details: "this is the second thing to do"
            }]
        },
        {
            storyName: "Story2",
            tasks: [{
                details: "this is the first thing to do is the second story"
            },
            {
                details: "this is the second thing to do story 2"
            }]
        }]
    },
    {
        username: "DB",
        stories: [{
            storyName: "Story1",
            tasks: [{
                details: "this is the first thing to do"
            },
            {
                details: "this is the second thing to do"
            }]
        },
        {
            storyName: "Story2",
            tasks: [{
                details: "this is the first thing to do is the second story"
            },
            {
                details: "this is the second thing to do story 2"
            }]
        }]
    }]
}

export default initialState;