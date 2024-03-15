import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Customer from './Pages/Customer';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp'
import { ShopContextProvider } from './Pages/Contex/ShopContext';

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/customer-care" element={<Customer/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/singup" element={<SingUp/>}/>

           


          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;