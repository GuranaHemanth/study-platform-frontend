import React, { useEffect, useRef } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function VideoRoom({ roomId }) {
  const localVideo = useRef();
  const remoteVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideo.current.srcObject = stream;

        const peer = new Peer({ initiator: true, stream });

        peer.on('signal', (data) => {
          socket.emit('join-room', roomId, data);
        });

        socket.on('user-connected', (signal) => {
          peer.signal(signal);
        });

        peer.on('stream', (remoteStream) => {
          remoteVideo.current.srcObject = remoteStream;
        });
      });

    return () => socket.disconnect();
  }, [roomId]);

  return (
    <div className="video-room">
      <video ref={localVideo} autoPlay muted />
      <video ref={remoteVideo} autoPlay />
    </div>
  );
}