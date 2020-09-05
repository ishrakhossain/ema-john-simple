import React, { useState } from 'react';
import fakeData from '../../fakeData';
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const[products,setProducts] = useState(firstTen)
    const[cart , setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pdKey => {
            const product  = fakeData.find(pd => pd.key === pdKey);
            product.quantity = savedCart[pdKey];
            return product;
        })
        setCart(previousCart);
        console.log(previousCart);
    }, [])   
    const handleAddProduct = (product) =>{
        
     
        
        //console.log('product added', product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey ) //ek product barbar jog korar jonno
        let count = 1;
        let newCart;
        if(sameProduct){
            
            count = sameProduct.quantity+1;
            sameProduct.quantity = sameProduct.quantity + 1;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]; 
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
       
       
        setCart(newCart);
       
        addToDatabaseCart(product.key, count);
        }

    return (
        <div className = 'twin-container'>
            <div className="product-container">
           
            {
                products.map(pd=> <Product
                    key = {pd.key}
                    showAddToCart = {true}
                    handleAddProduct = {handleAddProduct}
                    product={pd}>

                    </Product>)
            }
           
            </div>
            <div className = 'cart-container'>
               <Cart  cart = {cart}></Cart>
               <Link to = "/review"> <button className="button">
                Review Order
            </button>
            </Link>
            </div>
            
        </div>
            
        
        
    );
};

export default Shop;