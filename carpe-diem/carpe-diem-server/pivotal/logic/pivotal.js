import { getProjects, getCurrentIteration, getUsers, updateToken } from '../api/service'


export const loadProjects = async (token) => {
    return await getProjects(token);
}

export const loadStories = async (token, projectid) => {
    let iteration = await getCurrentIteration(token, projectid);
    let stories = iteration[0].stories
    return stories;
}

export const loadMembers = async (token, projectid) => {
    let users = await getUsers(token, projectid)
    return users.filter(user => user.role == "member");
}
