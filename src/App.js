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
      <h1>Nopeus {nopeus} km/h</h1>
      <div className="number-inputs">
        <h3>Kadenssi</h3>
        <input 
        type="number" 
        placeholder="rpm" 
        value = {kadenssi} 
        onChange={e => setKadenssi(+e.target.value)}
        />
      </div>
      <div>
        <h3>Vanne</h3>
        <input 
        type="number" 
        placeholder="mm" 
        value = {vanne} 
        onChange={e => setVanne(+e.target.value)}
        />
      </div>
      <div>
        <h3>Rengas</h3>
        <input 
        type="number" 
        placeholder="mm" 
        value = {rengas} 
        onChange={e => setRengas(+e.target.value)}
        />
      </div>
      <div>
        <h3>Eturatas</h3>
        <input 
        type="number" 
        placeholder="hammasluku" 
        value = {eturatas} 
        onChange={e => setEturatas(+e.target.value)}
        />
      </div>
      <div>
        <h3>Takaratas</h3>
        <input 
        type="number" 
        placeholder="hammasluku" 
        value = {takaratas} 
        onChange={e => setTakaratas(+e.target.value)}
        />
      </div>
      <div>
        <button onClick={addThem}>Laske</button>
        
      </div>
    </div>
  );
}

export default App;
