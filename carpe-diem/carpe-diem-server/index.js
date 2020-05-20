import { loadProjects, loadStories, loadMembers, setToken } from './pivotal/logic/pivotal';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

app.get('/api/:projectid/users', async (req, res) => {
    let projectid = req.params.projectid;
    let members = await loadMembers(projectid);
    res.send(members)
});

app.get('/api/:projectid/stories', async (req, res) => {
    let projectid = req.params.projectid;
    let stories = await loadStories(projectid);
    res.send(stories);

});

app.post('/api/token', async (req, res) => {
    // console.log("Request", req.body)
    setToken(req.body.token);
    let projects = await loadProjects();
    res.send(projects);
});



const port = 4001;

app.listen(port, () => console.log(`listening on port:${port}`))