import './App.css';
import React, { useState } from 'react';

function App() {
  const[kadenssi, setKadenssi] = useState(isNaN);
  const[vanne, setVanne] = useState(isNaN);
  const[rengas, setRengas] = useState(isNaN);
  const[eturatas, setEturatas] = useState(isNaN);
  const[takaratas, setTakaratas] = useState(isNaN);
  const[nopeus, setNopeus] = useState(isNaN)

  function addThem(){
    setNopeus((eturatas/takaratas*(vanne+(rengas*2))*Math.PI/1000*kadenssi/60*3.6).toFixed(2))};

  return (
    <div className="App">
      <h1>Speed {nopeus} km/h</h1>
      <div className="number-inputs">
        <h3>Cadence</h3>
        <input 
        type="number" 
        placeholder="rpm" 
        value = {kadenssi} 
        onChange={e => setKadenssi(+e.target.value)}
        />
      </div>
      <div>
        <h3>Rim</h3>
        <input 
        type="number" 
        placeholder="diameter mm" 
        value = {vanne} 
        onChange={e => setVanne(+e.target.value)}
        />
      </div>
      <div>
        <h3>Tire</h3>
        <input 
        type="number" 
        placeholder="width mm" 
        value = {rengas} 
        onChange={e => setRengas(+e.target.value)}
        />
      </div>
      <div>
        <h3>Front Gear</h3>
        <input 
        type="number" 
        placeholder="number of teeth" 
        value = {eturatas} 
        onChange={e => setEturatas(+e.target.value)}
        />
      </div>
      <div>
        <h3>Rear Gear</h3>
        <input 
        type="number" 
        placeholder="number of teeth" 
        value = {takaratas} 
        onChange={e => setTakaratas(+e.target.value)}
        />
      </div>
      <div>
        <button onClick={addThem}>Submit</button>
        
      </div>
    </div>
  );
}

export default App;
