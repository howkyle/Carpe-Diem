import React from 'react';
import './Setup.css';
import { getProjects, setToken } from '../../api/pivotalService';
import { Link } from 'react-router-dom';



const Setup = (props) => {

    const loadProjects = (response) => {
        props.update({ token: props.state.token, projects: response.data });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setToken(props.state.token)
        getProjects(loadProjects);
    }

    return (
        <div class="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Access Token:
                    <input type="text" value={props.state.token} onChange={(e) => props.update({ token: e.target.value, projects: props.state.projects })}>

                    </input>
                </label>
                <label>
                    <button type="Submit">Submit</button>
                </label>
            </form>

            <div class="project-list">
                <ul >
                    {props.state.projects.map(project => <Link to={`/board/${project.id}`}> <li key={project.id}>{project.name} </li></Link>)}
                </ul>

            </div>
        </div >
    )
}

export default Setup;