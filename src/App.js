import React from 'react';
import Routee from './routes';
import './App.css';
import CartProviders from './Providers/CartProviders';

function App() {
  return (  
        <CartProviders>
          <Routee /> 
        </CartProviders>
  );
}

export default App;
