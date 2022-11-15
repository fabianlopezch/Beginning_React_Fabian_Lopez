import React, { Component } from "react";

class Products extends Component {
    render() {

        const products = ["Boston Dynamics' Atlas", "IIT's iCub", "DLR's Toro" , "Tesla's Optimus"];
        const listProducts = products.map((product) => 
            <li key={product.toString()}>{product}</li>);

        return (
            <div>
                <h2>Products</h2>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}

export default Products;