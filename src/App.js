import React from 'react';
import './App.css';
import D3Shapes from './demos/D3Shapes'
import D3Chart from './demos/D3Chart'
import Nivo from './demos/Nivo'
import Recharts from './demos/Recharts'


function App() {
  return (
    <div className="App">
      <h1>React Visualization Demos</h1>
      <h2>d3.js - Shapes</h2>
        <D3Shapes/>
      <h2>d3.js - Chart</h2>
        <D3Chart/>
      <h2>nivo</h2>
        <Nivo/>
      <h2>Recharts</h2>
        <Recharts/>
    </div>
  );
}

export default App;
