import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity, key,price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: "5px",
        paddingBottom: "5px",
        marginLeft: '200px'
    }
    return (
        <div style = {reviewItemStyle}>
            <h1 className>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button onClick = {()=> props.handleRemoveProduct(key)} class = 'button'>Remove</button>
        </div>
    );
};

export default ReviewItem;