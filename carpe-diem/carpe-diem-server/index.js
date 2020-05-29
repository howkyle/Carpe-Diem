import { loadProjects, loadStories, loadMembers, setToken } from './pivotal/logic/pivotal';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { GenerateToken, DecodeToken } from './auth/Token'

const app = express();
app.use(bodyParser.json());

var cors = require('cors');
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(DecodeToken())

app.get('/api/:projectid/users', async (req, res) => {
    res.send(await loadMembers(req.payload.api_token, req.params.projectid))
});

app.get('/api/:projectid/stories', async (req, res) => {
    res.send(await loadStories(req.payload.api_token, req.params.projectid));
});

app.post('/api/token', async (req, res) => {
    res.cookie("access_token", GenerateToken({ "api_token": req.body.token }));
    res.send(await loadProjects(req.body.token));
});



const port = 4001;

app.listen(port, () => console.log(`listening on port:${port}`))