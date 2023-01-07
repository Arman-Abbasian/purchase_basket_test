import { Routes,Route } from "react-router-dom";
import React from "react";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage/HomePage";

const Routee = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
     );
}
 
export default Routee;