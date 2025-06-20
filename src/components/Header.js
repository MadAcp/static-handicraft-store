import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const dashboardPath = user?.role === 'admin' ? '/admin' : user?.role === 'seller' ? '/seller' : '/';

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-brown-900">Handicraft Store</div>
      <nav className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/offers" className="hover:underline">Offers</Link>
        {user && (
          <Link to={dashboardPath} className="hover:underline font-semibold">Dashboard</Link>
        )}
        {!user ? (
          <Link to="/login" className="hover:underline">Login</Link>
        ) : (
          <>
            <span className="ml-2 text-brown-900 font-semibold">{user.username}</span>
            <button onClick={handleLogout} className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header; 