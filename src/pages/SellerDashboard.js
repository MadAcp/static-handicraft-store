import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products.json';

const SellerDashboard = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('loggedInUser');
    return saved ? JSON.parse(saved) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'seller') {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'seller') return null;

  const myProducts = products.filter((p) => p.sellerId === user.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <div><strong>Username:</strong> {user.username}</div>
        <div><strong>Role:</strong> {user.role}</div>
      </div>
      <div className="flex justify-end mb-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded">+ Add Product</button>
      </div>
      <h2 className="text-xl font-semibold mb-2">My Products</h2>
      {myProducts.length === 0 ? (
        <div className="text-gray-500">You have no products listed.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myProducts.map((product) => (
            <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col items-center relative">
              <div className="w-24 h-24 bg-gray-200 rounded mb-2 flex items-center justify-center">
                <span className="text-gray-400">[Image]</span>
              </div>
              <div className="font-semibold text-lg mb-1">{product.name}</div>
              <div className="text-sm text-gray-600 mb-2">{product.description}</div>
              <div className="text-brown-900 font-bold mb-1">${product.price}</div>
              <div className="text-xs text-gray-500">Category: {product.category}</div>
              <div className="flex gap-2 mt-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">[Seller Controls Placeholder]</div>
    </div>
  );
};

export default SellerDashboard; 