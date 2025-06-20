import React from 'react';
import { useNavigate } from 'react-router-dom';

const getSlug = (name, id) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + id;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/products/${getSlug(product.name, product.id)}`);
  };
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer" onClick={handleView}>
      <div className="w-32 h-32 bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
        {/* Replace with real image if available */}
        {product.image ? (
          <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400">[Image]</span>
        )}
      </div>
      <div className="font-semibold text-lg mb-1">{product.name}</div>
      <div className="text-brown-900 font-bold mb-1">${product.price}</div>
      <div className="text-xs text-gray-500 mb-2">Category: {product.category}</div>
      <button className="mt-auto bg-brown-900 text-white px-3 py-1 rounded text-sm" onClick={e => {e.stopPropagation(); handleView();}}>View Details</button>
    </div>
  );
};

export default ProductCard; 