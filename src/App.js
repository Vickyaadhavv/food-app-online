import React, { useState } from "react"
//import { Routes,Route } from "react-router-dom";
import "./App.css"
import Navbar from "./component/navbar";
import Cart from "./component/cart";
import Content from "./component/content";

const App = ()=>{
    const [show , setShow]=useState(true);
     const [cart, setCart] =useState([]);
    
   
   const handleClick = (item) =>{
        if (cart.indexOf(item) !== -1) return;
     setCart([...cart, item]);
    }
    /*const handleClick = (item) =>{
      if (cart.indexOf(item) !== -1) {
    isempty(false)
   setCart([...cart, item])}
   else{
     setempty({
      show:true,
      msg:"Your cart is Empty"
     })

   }
  }*/
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    }
  
    //useEffect(() => {
    //      console.log("cart change");
     //   }, [cart]);
return(
    <>
   <Navbar setShow ={setShow} size={cart.length}/>
   {
   show ?<Content handleClick={handleClick} handleChange={handleChange}/> :<Cart cart={cart} setCart={setCart} handleChange={handleChange} /> 
    }
    </>
)
};
export default App;
