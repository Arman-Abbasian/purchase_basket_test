import Layout from "../../Layout/Layout";
import React from "react";
import { products } from "../../server/data";
import './homePage.css';
import { useCart, useCartActions } from "../../Providers/CartProviders";

const HomePage = () => {
    const cart=useCart();
    const dispatch=useCartActions();
    console.log(cart)
    const addProductHandler=(product)=>{
        console.log(product);
        dispatch({type:'ADD_TO_CART',payload:product})
    };
    return ( 
        <Layout>
            <h2>Home page</h2>
            <main className="container">
            <section className="productList">
            {products.map(item=>{
              return  <section key={item.id} className="product">
                    <div className="productImg">
                        <img src={item.image} alt={item.name}></img>
                    </div>
                    <div className="productDesc">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button className="btn primary" onClick={()=>addProductHandler(item)}> Add to cart</button>
                    </div>
                </section>
            })}
            </section>
            </main>
        </Layout>
     );
}
 
export default HomePage;