import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import KanbanBoard from './components/kanban_board/KanbanBoard';
// import { boardState, updateState } from './components/kanban_board/State'
import { loadState, boardInitialState } from './components/kanban_board/State'
import { getUsers, getStories, getStoriesInCurrentIteration } from './api/pivotalService';


function App() {


  const [usersState, updateUsers] = useState([])
  const [storiesState, updateStories] = useState([])
  const boardState = { users: usersState, stories: storiesState }



  const loadUsers = (response) => {
    let users = response.data;
    console.log("users, ", users)
    return updateUsers(users)
  }

  const loadStories = (response) => {
    let stories = response.data
    console.log("stories", stories)
    return updateStories(stories)
  }


  const loadStoriesIteration = (response) => {
    console.log(response)
    let stories = response.data[0].stories
    console.log("stories in iteration", stories)
    return updateStories(stories)
  }

  useEffect(() => {
    getUsers("2203829", loadUsers)
  }, []);


  useEffect(() => {
    // getStories("2203829", loadStories)
    getStoriesInCurrentIteration("2203829", loadStoriesIteration)

  }, [])


  return (
    <div className="App">
      <Header className="header" title="Carpe Diem - Pivotal"></Header>
      <KanbanBoard boardState={boardState} className="kanban-board"></KanbanBoard>

    </div>
  );
}

export default App;
