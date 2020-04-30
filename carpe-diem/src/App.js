import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import KanbanBoard from './components/kanban_board/KanbanBoard';
import State from './components/kanban_board/State'

function App() {


  const [boardState, updateBoard] = useState(State)

  return (
    <div className="App">
      <Header className="header" title="Carpe Diem - Pivotal"></Header>
      <KanbanBoard board={boardState} className="kanban-board"></KanbanBoard>

    </div>
  );
}

export default App;
