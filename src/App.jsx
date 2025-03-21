import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import RoomList from './components/Rooms/RoomList';
import VideoRoom from './components/Rooms/VideoRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/room/:roomId" element={<VideoRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;