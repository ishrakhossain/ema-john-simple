import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    //console.log(props);
    const {img , name, seller, price, stock} = props.product;//bar bar jate na likha lage ek jinish
    return (
        <div className="product">
            <div>
                <img src = {img} alt="" srcset=""/>
            </div>
            <div>
            <h4 className = 'name'>{name}</h4>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>only {stock} left in stock - order soon</small></p>
            <br/>
            <button className = 'button' onClick = {() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;