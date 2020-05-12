import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import KanbanBoard from './components/kanban_board/KanbanBoard';
import Setup from './components/project_setup/Setup';
// import { getUsers, getStories, getStoriesInCurrentIteration } from './api/pivotalService';


function App() {


  const [usersState, updateUsers] = useState([])
  const [storiesState, updateStories] = useState([])
  const boardState = { users: { usersState, updateUsers }, stories: { storiesState, updateStories } }
  const [setupState, updateSetup] = useState({ token: "", projects: [] })


  return (
    <div className="App">
      <Header className="header" title="Carpe Diem - Pivotal"></Header>
      <Router>
        <Route path="/" exact render={(props) => <Setup state={setupState} update={updateSetup}></Setup>}></Route>
        <Route path="/board/:id" render={(props) => <KanbanBoard boardState={boardState} className="kanban-board"></KanbanBoard>}></Route>
      </Router>
    </div>
  );
}

export default App;
