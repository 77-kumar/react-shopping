import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">shop</Link>
      <div className="title">
        Welcome to the best online shopping website
      </div>
      <Link to="/cart" className="cart">
        <ShoppingCart size={32} />
      </Link>
      <Link to='/customer-care' className="customer-care">
        customer care
      </Link>
      <Link to='/login' className='login'>Login</Link>
      
    </div>
  );
}

export default Navbar;
