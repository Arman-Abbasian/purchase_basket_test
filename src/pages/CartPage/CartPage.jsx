import React from "react";
import CartSummary from "../../components/CartSummary/CartSummary";
import Layout from "../../Layout/Layout";
import { useCart, useCartActions } from "../../Providers/CartProviders";
import './cartPage.css';


const CartPage = () => {
    const {cart,total}=useCart();
    const dispatch=useCartActions();


    if(!cart.length) return <Layout><h2>no product in basket !</h2></Layout>
    return ( 
        <Layout>
            <main className="container">
                <section className="cartCenter">
                    <section className="cartItemList">
                        {cart.map(item=>(
                        <div className="cartItem" key={item.id}>
                            <div className="itemImg">
                                <img src={item.image} alt={item.name}></img>
                            </div>
                            <div>{item.name}</div>
                            <div>{item.offPrice * item.quantity}</div>
                            <div>
                                <button onClick={()=>dispatch({type:"REMOVE_PRODUCT",payload:item})}>remove</button>
                                <button>{item.quantity}</button>
                                <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}>Add</button>
                            </div>
                        </div>
                    ))
                    }
                    </section>
                    <CartSummary />
                </section>
            </main>
        </Layout>
     );
}
 
export default CartPage;