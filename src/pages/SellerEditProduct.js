import React, { useState } from 'react';
import categories from '../data/categories.json';

const dummyProduct = {
  name: 'Sample Product',
  description: 'Sample description',
  price: '20.00',
  image: '',
  category: categories[0],
  offer: '10% off'
};

const SellerEditProduct = () => {
  const [form, setForm] = useState(dummyProduct);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product to update (UI only):\n' + JSON.stringify(form, null, 2));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white rounded shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded">
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Offer/Discount</label>
          <input name="offer" value={form.offer} onChange={handleChange} className="w-full border p-2 rounded" placeholder="e.g. 10% off, Buy 1 Get 1 Free" />
        </div>
        <button type="submit" className="bg-brown-900 text-white px-4 py-2 rounded font-bold">Update Product</button>
      </form>
    </div>
  );
};

export default SellerEditProduct; 