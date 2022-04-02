import React from 'react';
import NavBar from './components/NavBar/NavBar';
import PatientContainer from './components/PatientContainer/PatientContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <PatientContainer />
    </div>
  );
}

export default App;
