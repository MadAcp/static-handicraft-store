import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../data/users.json';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userObj = users.find(
      (u) => u.username === username && u.password === password
    );
    if (userObj) {
      login(userObj);
      if (userObj.role === 'admin') navigate('/admin', { replace: true });
      else if (userObj.role === 'seller') navigate('/seller', { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (user) {
    return (
      <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow text-center">
        <h1 className="text-xl font-bold mb-4">Welcome, {user.username}!</h1>
        <p className="mb-4">Role: {user.role}</p>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Admin/Seller Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button type="submit" className="bg-brown-900 text-white px-4 py-2 rounded w-full font-bold">Login</button>
      </form>
    </div>
  );
};

export default Login; 