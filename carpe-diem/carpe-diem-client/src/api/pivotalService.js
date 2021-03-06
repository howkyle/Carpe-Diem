import axios from 'axios';
import { handleResponse, handleError } from './utilities/responseHandling';



export const getUsers = (projectid) => {
    let url = `http://localhost:4001/api/${projectid}/users`
    return axios.get(url, { withCredentials: true })
        .then(handleResponse)
        .catch(handleError)

}

export const getStories = (projectid) => {
    let url = `http://localhost:4001/api/${projectid}/stories`

    return axios.get(url, { withCredentials: true })
        .then(handleResponse)
        .catch(handleError)

}

export const getProjects = () => {
    let url = 'http://localhost:4001/api/projects'

    return axios.get(url, { withCredentials: true })
        .then(handleResponse)
        .catch(handleError)

}

export const submitToken = (token) => {

    //takes token returns a list of projects
    let url = 'http://localhost:4001/api/token'
    return axios.post(url, { "token": token }, { withCredentials: true })
        .then(handleResponse)
        .catch(handleError)

}






// export default getStories;