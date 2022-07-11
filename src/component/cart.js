import React, { useState , useEffect} from "react";
//import Order from "../orderdata";
import "../styles/cart.css";

const Cart=({setCart,cart,handleChange })=>{
    const [price, setPrice]= useState(0);
    const [order, setOrder]= useState([]);
   

    const handleOrder =(item)=>{
      if (order.indexOf(item) !== -1)  return;
      setOrder([...cart,item]);
    }

     const handleRemove =(id)=>{
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
}
const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
    return(
      <div className="content">
        <div className="article">
            {cart.map((item)=>(
                 <div className="cart_box" key={item.id}>
                 <div className="cart_img">
                   <img src={item.image} alt="" />
                   <p>{item.title}</p>
                 </div>
                 <div>
                   <button onClick={() => handleChange(item, 1)}>+</button>
                   <button>{item.amount}</button>
                   <button onClick={() => handleChange(item, -1)}>-</button>
                 </div>
                 <div>
                   <span>{item.price}</span>
                   <button onClick={() => handleRemove(item.id)}>Remove</button>
                 </div>
               </div>
            ))}
            <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        <button onClick={()=>handleOrder(order)}>place Order</button>
      </div>
      </div>
      <div  className="whole">
           <h1>Your Order</h1>
         <div className="search-box">
           <input type="search" placeholder="search" />
           <div>
           {order.map((item)=>(
                 <div key={item.id}>
                   <p>{item.title}</p>
                 <div>
                   <span>{item.price}</span>
                 </div>
               </div>
            ))}
           </div>
         </div>
         </div>

        </div>
    )
};
export default Cart;