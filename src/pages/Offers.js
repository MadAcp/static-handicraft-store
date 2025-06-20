import React from 'react';
import products from '../data/products.json';

const getOfferType = (offer) => {
  if (!offer) return null;
  if (offer.toLowerCase().includes('off')) return 'Discount';
  if (offer.toLowerCase().includes('free')) return 'BOGO';
  return 'Other';
};

const offerProducts = products.filter((p) => p.offer);
const grouped = offerProducts.reduce((acc, product) => {
  const type = getOfferType(product.offer);
  if (!acc[type]) acc[type] = [];
  acc[type].push(product);
  return acc;
}, {});

const badgeColors = {
  Discount: 'bg-green-100 text-green-800',
  BOGO: 'bg-blue-100 text-blue-800',
  Other: 'bg-yellow-100 text-yellow-800',
};

const Offers = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Special Offers</h1>
    {Object.keys(grouped).length === 0 && (
      <div className="text-gray-500">No current offers available.</div>
    )}
    {Object.entries(grouped).map(([type, products]) => (
      <div key={type} className="mb-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${badgeColors[type]}`}>{type}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col items-center border-2 border-yellow-300 relative">
              <div className="absolute top-2 right-2 px-2 py-1 rounded bg-yellow-400 text-white text-xs font-bold shadow">{product.offer}</div>
              <div className="w-24 h-24 bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-gray-400">[Image]</span>
                )}
              </div>
              <div className="font-semibold text-lg mb-1">{product.name}</div>
              <div className="text-brown-900 font-bold mb-1">${product.price}</div>
              <div className="text-xs text-gray-500 mb-2">Category: {product.category}</div>
              <a href={`/products/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${product.id}`} className="text-brown-900 hover:underline text-sm">View Details</a>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Offers; 