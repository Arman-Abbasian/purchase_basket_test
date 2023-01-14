import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProviders";
import './cartSummary.css'
const CartSummary = () => {
  const { total, cart } = useCart();
  const originalTotalPrice =
    cart.length &&
    cart.reduce(
        (acc, curr) => acc + (curr.quantity * curr.price),
        0
      );
  return (
    <section className="cartSummary">
      <h2>cart summary</h2>
      <div className="summaryItem">
        <p>original total price</p>
        <p>{originalTotalPrice}</p>
      </div>
      <div className="summaryItem">
        <p>cart discount</p>
        <p>{originalTotalPrice - total}</p>
      </div>
      <div className="summaryItem net">
        <p>net price</p>
        <p>{total}</p>
      </div>
      <Link to={'/checkout'}>
        <button>go to check out</button>
      </Link>
    </section>
  );
};

export default CartSummary;
