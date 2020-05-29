import axios from 'axios';
import { handleResponse, handleError } from '../../common/responseHandling';



export const getUsers = (token, projectid) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/memberships?fields=person,role`;

    return axios.get(url, { headers: { 'X-TrackerToken': token } })
        .then(handleResponse)
        .catch(handleError)

}

export const getStories = (token, projectid) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/stories?fields=tasks,owned_by,name,current_state`

    return axios.get(url, { headers: { 'X-TrackerToken': token } })
        .then(handleResponse)
        .catch(handleError)

}

export const getCurrentIteration = (token, projectid) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects/${projectid}/iterations?fields=stories(tasks,owned_by(id),name,current_state,description)&scope=current`

    return axios.get(url, { headers: { 'X-TrackerToken': token } })
        .then(handleResponse)
        .catch(handleError)

}


export const getProjects = (token) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects`

    return axios.get(url, { headers: { 'X-TrackerToken': token } })
        .then(handleResponse)
        .catch(handleError)

}

export const updateToken = (token) => {
    axios.defaults.headers.common['X-TrackerToken'] = token;
}





// export default getStories;