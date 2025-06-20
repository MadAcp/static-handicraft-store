import React from 'react';
import products from '../data/products.json';

const featuredProducts = products.slice(0, 2);
const offerProducts = products.filter(p => p.offer);
const offers = [
  {
    title: 'Summer Sale!',
    description: 'Get 20% off on all Home Decor items. Limited time only!'
  }
];
const testimonials = [
  {
    name: 'Priya S.',
    text: 'Absolutely loved the handmade vase I ordered! The quality is amazing and delivery was quick.'
  },
  {
    name: 'Rahul M.',
    text: 'The macrame wall hanging brightened up my living room. Will shop again!'
  },
  {
    name: 'Ayesha K.',
    text: 'Great offers and unique products. Highly recommend this store!'
  }
];

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-12 mb-8 text-center rounded-lg shadow">
      <h1 className="text-5xl font-extrabold mb-4 text-brown-900">Discover Handcrafted Treasures</h1>
      <p className="mb-6 text-lg text-brown-800">Unique, artisan-made products for your home and lifestyle.</p>
      <a href="/products" className="inline-block bg-brown-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-brown-800 transition">Shop Now</a>
    </section>

    {/* Offers Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-brown-900">Special Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offerProducts.slice(0, 3).map(product => (
          <div key={product.id} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
              {product.image ? (
                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-400">[Image]</span>
              )}
            </div>
            <div className="font-semibold text-lg mb-1">{product.name}</div>
            <div className="text-brown-900 font-bold mb-1">${product.price}</div>
            <div className="text-yellow-700 font-semibold mb-1">{product.offer}</div>
            <a href={`/products/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${product.id}`} className="text-brown-900 hover:underline text-sm">View Details</a>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Products Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-brown-900">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featuredProducts.map(product => (
          <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded mb-2 flex items-center justify-center">
              <span className="text-gray-400">[Image]</span>
            </div>
            <div className="font-semibold text-lg mb-1">{product.name}</div>
            <div className="text-sm text-gray-600 mb-2">{product.description}</div>
            <div className="text-brown-900 font-bold mb-1">${product.price}</div>
            <div className="text-xs text-gray-500">Category: {product.category}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-brown-900">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded shadow p-6 flex flex-col items-center">
            <div className="text-brown-900 font-bold mb-2">{t.name}</div>
            <div className="italic text-gray-700 text-center">"{t.text}"</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Home; 