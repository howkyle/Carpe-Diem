import { getProjects, getCurrentIteration, getUsers, updateToken } from '../api/service'


export const loadProjects = async () => {
    let projects = await getProjects();
    return projects;
}

export const loadStories = async (projectid) => {
    let iteration = await getCurrentIteration(projectid);
    let stories = iteration[0].stories
    return stories;
}

export const loadMembers = async (projectid) => {
    let users = await getUsers(projectid)
    return users.filter(user => user.role == "member");
}

export const setToken = (token) => {
    updateToken(token);
}