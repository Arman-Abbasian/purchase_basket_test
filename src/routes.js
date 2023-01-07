import { Routes,Route } from "react-router-dom";
import React from "react";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";


const Routee = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
     );
}
 
export default Routee;