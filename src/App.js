import React from 'react';
import './App.css';

import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <main>
        <nav className="green darken-4">
            <b>Tic-Tac-Toe Game</b>
        </nav>

        <Board />
      </main>
    </div>
  );
}

export default App;
