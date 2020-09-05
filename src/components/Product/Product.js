import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    console.log(props);
    const {img , name, seller, price, stock, key} = props.product;//bar bar jate na likha lage ek jinish
    return (
        <div className="product">
            <div>
                <img src = {img} alt="" srcset=""/>
            </div>
            <div>
            <h4 className = 'name'><Link to = {"/product/"+ key}>{name}</Link></h4>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>only {stock} left in stock - order soon</small></p>
            <br/>
           {props.showAddToCart == true &&  <button className = 'button' onClick = {() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>
           
        </div>
    );
};

export default Product;