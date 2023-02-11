import React from 'react';
import Form from './components/Form';
import Lists from './components/Lists';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="lists" element={<Lists />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
