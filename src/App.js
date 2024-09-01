import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home'; // HomePage's index.jsx
import RoomPage from './Pages/Room'; // RoomPage's index.jsx

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
