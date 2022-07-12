import React, { useState } from "react";
import orderData from "../orderdata";
//import Orderdataa from "../orderdataa";
//import Order from "../orderdata";
import "../styles/cart.css";


const Cart=({ setCart,cart,handleChange })=>{
    const [price, setPrice]= useState(0);
    const [order, setOrder]= useState([]);
    const [data , setOrderdata] = useState(orderData);
    
  
     
    const filterResult =(curItem)=>{
      const result =orderData.filter((curData)=>{
          return curData.type===curItem;
      })
      setOrderdata(result)
  };

  const handlesort =()=>{
    const sortedData =[...data].sort((a,b) =>{
     return a.title > b.title ? 1:-1
    })
    setOrderdata(sortedData)
  }
  
    const handleOrder =(item)=>{
      let ans=0
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans) 
      if (order.indexOf(item) !== -1)  return;
      setOrder([...cart,item]); 
    }
     
     const handleRemove =(id)=>{
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
   // handleprice()
     }
/*const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });*/
    return(
      <div className="content">
        <div className="article">
        <h1 className="mc">My Cart</h1>
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
        <button className="op" onClick={()=>handleOrder(order)}>place Order</button>
      </div>
      </div>
      <div  className="whole">
           <h1>Your Order</h1>
           <div>
        {order.map((item)=>(
              <div className="orders" key={item.id}>
                <h3>{item.title}</h3>
                <h3>{item.amount}</h3>
                <h3 className="price">{item.price}</h3>
            </div>
         ))}
         <div className="placed">Order placed</div>
         <span className="tp">Total Price of your order</span>
         <span className="ta">Rs-{price}</span>
        </div>
        <>
    <div className="ro">
          <h1>Orders History</h1>
          <div className="order-btn">
                <button className="btnn" onClick={()=>filterResult("Vegitarian")}>Veg</button>
                <button className="btnn" onClick={()=>filterResult("non-Veg")}>Non-veg</button>
                <button className="btnn"  onClick={()=>filterResult("desserts")}>Desserts</button>
                <button className="btnn" onClick={()=>setOrderdata(orderData)}>All</button>
                <button className="btnn" onClick={handlesort}>sort A-Z</button>
              </div>
          <div className="placed-orders">
        {data.map((item)=>(
              <div className="orders" key={item.id}>
                <h3>{item.title}</h3>
                <h3>{item.ORDER_DATE}</h3>
                <h3>{item.ORDER_TIME}</h3>
                <h3>Rs-{item.price}</h3>
            </div>
         ))}
         </div>
         </div>
    </>
         </div>
         <div>
         </div>
         </div>
    )
};
export default Cart;