import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Forgotpassword from './pages/Forgotpassword';
import AboutMePage from './pages/AboutMePage';
import LogoutPage from './pages/LogoutPage';
import './App.css';
import Footer from './components/Footer';
import products from './products';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState('en');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    return <Navigate to="/" />;
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    return <Navigate to="/" />;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setName('');
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <div className="container">
      <Router>
        <div className="app">
          <Navbar 
            cartItems={cartItems} 
            setSearchQuery={setSearchQuery} 
            isAuthenticated={isAuthenticated} 
            handleLogout={handleLogout} 
            language={language} 
            setLanguage={setLanguage}
          />
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <HomePage
                    products={filteredProducts}
                    addToCart={addToCart}
                    cartItems={cartItems}
                    getTotalPrice={getTotalPrice}
                    language={language}
                  />
                ) : (
                  <SignUpPage
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    emailError={emailError}
                    passwordError={passwordError}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    language={language}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                <SignUpPage
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  emailError={emailError}
                  passwordError={passwordError}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  language={language}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetailsPage
                  products={products}
                  addToCart={addToCart}
                  cartItems={cartItems}
                  language={language}
                />
              }
            />
            <Route path="/contact" element={<ContactPage language={language} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  getTotalPrice={getTotalPrice}
                  language={language}
                />
              }
            />
            <Route path="/forgotpassword" element={<Forgotpassword language={language} />} />
            <Route path="/aboutme" element={<AboutMePage name={name} email={email} language={language} />} />
            <Route path="/logout" element={<LogoutPage handleLogout={handleLogout} language={language} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
