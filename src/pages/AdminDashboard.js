import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../data/users.json';
import products from '../data/products.json';

const statusColors = {
  APPROVED: 'bg-green-100 text-green-800',
  PENDING: 'bg-yellow-100 text-yellow-800',
};

const AdminDashboard = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('loggedInUser');
    return saved ? JSON.parse(saved) : null;
  });
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sellers, setSellers] = useState(usersData.filter((u) => u.role === 'seller'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'admin') return null;

  const filteredSellers =
    statusFilter === 'ALL'
      ? sellers
      : sellers.filter((s) => s.status === statusFilter);

  const handleStatusChange = (id, newStatus) => {
    setSellers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const handleEdit = (id) => {
    alert(`Edit seller ${id} (UI only)`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this seller?')) {
      setSellers((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <div><strong>Username:</strong> {user.username}</div>
        <div><strong>Role:</strong> {user.role}</div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Seller Listing</h2>
      <div className="mb-2 flex gap-2 items-center">
        <span className="font-semibold">Filter by status:</span>
        <button onClick={() => setStatusFilter('ALL')} className={`px-3 py-1 rounded ${statusFilter === 'ALL' ? 'bg-brown-900 text-white' : 'bg-white text-brown-900 border'}`}>All</button>
        <button onClick={() => setStatusFilter('APPROVED')} className={`px-3 py-1 rounded ${statusFilter === 'APPROVED' ? 'bg-green-800 text-white' : 'bg-white text-green-800 border'}`}>Approved</button>
        <button onClick={() => setStatusFilter('PENDING')} className={`px-3 py-1 rounded ${statusFilter === 'PENDING' ? 'bg-yellow-800 text-white' : 'bg-white text-yellow-800 border'}`}>Pending</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Seller ID</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Products</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSellers.map((seller) => (
              <tr key={seller.id}>
                <td className="py-2 px-4 border-b text-center">{seller.id}</td>
                <td className="py-2 px-4 border-b">{seller.username}</td>
                <td className="py-2 px-4 border-b text-center">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${statusColors[seller.status]}`}>{seller.status}</span>
                </td>
                <td className="py-2 px-4 border-b text-center">{products.filter(p => p.sellerId === seller.id).length}</td>
                <td className="py-2 px-4 border-b text-center flex gap-2 justify-center">
                  <button onClick={() => handleEdit(seller.id)} className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Edit</button>
                  <button onClick={() => handleDelete(seller.id)} className="bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
                  {seller.status === 'PENDING' && (
                    <button onClick={() => handleStatusChange(seller.id, 'APPROVED')} className="bg-green-600 text-white px-2 py-1 rounded text-xs">Approve</button>
                  )}
                  {seller.status === 'APPROVED' && (
                    <button onClick={() => handleStatusChange(seller.id, 'PENDING')} className="bg-yellow-600 text-white px-2 py-1 rounded text-xs">Set Pending</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">All Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Seller</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const seller = usersData.find((u) => u.id === product.sellerId);
                return (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">${product.price}</td>
                    <td className="py-2 px-4 border-b">{product.category}</td>
                    <td className="py-2 px-4 border-b">{seller ? seller.username : 'N/A'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6">[Admin Controls Placeholder]</div>
    </div>
  );
};

export default AdminDashboard; 