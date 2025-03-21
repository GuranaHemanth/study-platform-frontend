import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/rooms');
        setRooms(res.data);
      } catch (error) {
        alert('Failed to load rooms');
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="room-list">
      <h2>Study Rooms</h2>
      {rooms.map((room) => (
        <div key={room._id} className="room-item">
          <h3>{room.name}</h3>
          <button onClick={() => navigate(`/room/${room._id}`)}>
            Join Room
          </button>
        </div>
      ))}
    </div>
  );
}