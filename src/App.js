import React from 'react';
import './App.css';
import Grid from './components/Grid';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Noughts and Crosses</h1>
      </header>
      <main>
        <Grid />
        <Score />
      </main>
    </div>
  );
}

export default App;
