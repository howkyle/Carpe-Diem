import axios from 'axios';
import { handleResponse, handleError } from '../../common/responseHandling';



export const getUsers = (projectid) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/memberships?fields=person,role`;

    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)

}

export const getStories = (projectid) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/stories?fields=tasks,owned_by,name,current_state`

    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)

}

export const getCurrentIteration = (projectid) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/iterations?fields=stories(tasks,owned_by(id),name,current_state)&scope=current`

    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)

}


export const getProjects = () => {
    let url = `https://www.pivotaltracker.com/services/v5/projects`

    return axios.get(url)
        .then(handleResponse)
        .catch(handleError)

}

export const updateToken = (token) => {
    axios.defaults.headers.common['X-TrackerToken'] = token;
}





// export default getStories;