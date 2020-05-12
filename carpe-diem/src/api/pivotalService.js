import axios from 'axios';


// axios.defaults.headers.common['X-TrackerToken'] = '079ff785cf0eb404ec8b14203b99a7e7';

export const getUsers = (projectid, callback) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/memberships?fields=person,role`;

    axios.get(url)
        .then(response => callback(response))
        .catch(response => callback(response))

}

export const getStories = (projectid, callback) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/stories?fields=tasks,owned_by,name,current_state`

    axios.get(url)
        .then(response => callback(response))
        .catch(response => callback(response))

}

export const getStoriesInCurrentIteration = (projectid, callback) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/iterations?fields=stories(tasks,owned_by(id),name,current_state)&scope=current`

    axios.get(url)
        .then(response => callback(response))
        .catch(response => console.log("error ", response))

}


// export const getTasks = (storyid, callback) => {
//     let url = `https://www.pivotaltracker.com/services/v5/projects/2203829/${storyid}`

//     axios.get(url)
//         .then(response => callback(response))
//         .catch(response => callback(response))

// }

export const getProjects = (callback) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects`

    axios.get(url)
        .then(response => callback(response))
        .catch(response => callback(response))

}

export const setToken = (token) => {
    axios.defaults.headers.common['X-TrackerToken'] = token;
}





// export default getStories;