import React from 'react';
import './App.css';
import {Edit} from "./features/booking/passenger/edit";

function App() {
  return (
      <div className="App">
          Example of Form
          <br/>
          <br/>
          <Edit passengerIds={["1"]}/>
      </div>
  );
}

export default App;
