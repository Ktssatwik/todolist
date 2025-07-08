import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({cartItems}) => {
    const navigate = useNavigate();

    return (
        <div>
           <h1>CART</h1>
           { cartItems.length > 0 ? (
            <p>NO ITEMS IN THE CART PLEASE ADD FROM INVENTORY</p>
           ):(
            <div>
                <p>ITEMS IN THE CART </p>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        
                ))}
            </ul>
            </div>
           )    
        }
        </div>
    )
}
export default Cart;