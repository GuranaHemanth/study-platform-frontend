import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Changed to HashRouter
import Login from './components/Auth/Login';
import RoomList from './components/Rooms/RoomList';
import VideoRoom from './components/Rooms/VideoRoom';

function App() {
  return (
    <HashRouter> {/* Changed from BrowserRouter */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/room/:roomId" element={<VideoRoom />} />
      </Routes>
    </HashRouter>
  );
}

export default App;