import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import socket from '../lib/socketConnection';
import { Login, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    socket.emit('testConnection', 'test connection is established!');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
