import { Routes,Route } from "react-router-dom";
import React from "react";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";


const Routee = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
     );
}
 
export default Routee;