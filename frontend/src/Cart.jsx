import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({cartItems,setCartItems,setPreviousOrders}) => {
    const navigate = useNavigate();

    const handleOrder = () => {
        if (cartItems.length === 0) {
            alert("CART IS EMPTY PLEASE ADD ITEMS FROM INVENTORY");
            return;
        }
        // Here you can add logic to process the order
        setPreviousOrders(prev => [...prev, cartItems]); 
        // Clear the cart after ordering
        setCartItems([]);
        alert("ORDER PLACED SUCCESSFULLY!");
        navigate("/previousOrders"); // Redirect to previous orders page after ordering
    }
    return (
        <div>
           <h1>CART</h1>
           { cartItems.length === 0 ? (
            <p>NO ITEMS IN THE CART PLEASE ADD FROM INVENTORY</p>
           ):(
            <div>
                <p>ITEMS IN THE CART </p>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <strong>{item.name}</strong> — Type: {item.type}, Price: {item.price}, Quantity: {item.quantity}
                            {item.description && <div>Description: {item.description}</div>}    
                        </li>                
                    ))}
                </ul>
                <div>
                    <button onClick={handleOrder}>ORDER NOW</button>
                </div>
            </div>
           )    
        }
        </div>
    )
}
export default Cart;