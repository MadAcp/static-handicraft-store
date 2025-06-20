import React, { useState } from 'react';

const statusOptions = ['APPROVED', 'PENDING'];
const dummySeller = {
  username: 'seller1',
  password: 'sellerpass',
  status: 'APPROVED'
};

const AdminEditSeller = () => {
  const [form, setForm] = useState(dummySeller);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Seller to update (UI only):\n' + JSON.stringify(form, null, 2));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Seller</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Username</label>
          <input name="username" value={form.username} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-brown-900 text-white px-4 py-2 rounded font-bold">Update Seller</button>
      </form>
    </div>
  );
};

export default AdminEditSeller; 