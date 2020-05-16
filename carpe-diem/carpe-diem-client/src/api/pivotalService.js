import axios from 'axios';
import { handleResponse, handleError } from './utilities/responseHandling';


axios.defaults.headers.common['X-TrackerToken'] = '079ff785cf0eb404ec8b14203b99a7e7';

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


export const getProjects = (callback) => {
    let url = `https://www.pivotaltracker.com/services/v5/projects`

    axios.get(url)
        .then(response => callback(response))
        .catch(response => callback(response))

}

export const setToken = (token) => {
    axios.defaults.headers.common['X-TrackerToken'] = token;
    sessionStorage.setItem("token", token)
}





// export default getStories;