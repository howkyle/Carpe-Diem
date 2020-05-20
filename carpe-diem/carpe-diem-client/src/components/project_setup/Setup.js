import React from 'react';
import './Setup.css';
import { submitToken } from '../../api/pivotalService';
import { Link } from 'react-router-dom';



const Setup = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.update({ token: props.state.token, projects: await submitToken(props.state.token) });

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