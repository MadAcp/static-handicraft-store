import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import users from '../data/users.json';

const getIdFromSlug = (slug) => {
  const match = slug.match(/-(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
};

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const id = getIdFromSlug(slug);
  const product = products.find((p) => p.id === id);
  const seller = product ? users.find((u) => u.id === product.sellerId) : null;

  if (!product) {
    return <div className="text-center text-red-500 mt-8">Product not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-6 mt-6">
      <button onClick={() => navigate('/products')} className="mb-4 text-brown-900 hover:underline">&larr; Back to Products</button>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 w-48 h-48 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
          {product.image ? (
            <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400">[Image]</span>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-brown-900 font-bold text-xl mb-2">${product.price}</div>
          <div className="mb-2 text-gray-600">{product.description}</div>
          <div className="mb-2 text-xs text-gray-500">Category: {product.category}</div>
          {seller && (
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <div className="font-semibold text-brown-900">Seller Info</div>
              <div>Username: {seller.username}</div>
              <div>Seller ID: {seller.id}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 