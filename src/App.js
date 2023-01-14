import React from 'react';
import Routee from './routes';
import './App.css';
import CartProviders from './Providers/CartProviders';
import  { Toaster } from 'react-hot-toast';
function App() {
  return (  
        <CartProviders>
          <Routee /> 
          <Toaster />
        </CartProviders>
  );
}

export default App;
