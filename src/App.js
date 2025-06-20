import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import SellerDashboard from './pages/SellerDashboard';
import ProductDetails from './pages/ProductDetails';
import SellerAddProduct from './pages/SellerAddProduct';
import SellerEditProduct from './pages/SellerEditProduct';
import AdminEditSeller from './pages/AdminEditSeller';

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/edit-seller/:id" element={<AdminEditSeller />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/seller/add-product" element={<SellerAddProduct />} />
          <Route path="/seller/edit-product/:id" element={<SellerEditProduct />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
