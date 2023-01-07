import Layout from "../../Layout/Layout";
import React from "react";
import { products } from "../../server/data";

const HomePage = () => {
    const addProductHandler=(product)=>{
        console.log(product)
    };
    return ( 
        <Layout>
            <h2>Home page</h2>
            <div className="productList">
            {products.map(item=>{
              return  <section key={item.id} className="product">
                    <div className="productImg">
                        <img src={item.image} alt={item.name}></img>
                    </div>
                    <div className="productDesc">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button className="btnPrimary" onClick={()=>addProductHandler(item)}> Add to cart</button>
                    </div>
                </section>
            })}
            </div>
        </Layout>
     );
}
 
export default HomePage;