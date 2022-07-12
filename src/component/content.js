import React, { useState } from "react";
import "../styles/amazon.css"
import List from "../data";
import Card from "./card";

const Content=({handleClick})=>{
  const [data,setData]= useState(List);
    const filterResult =(curItem)=>{
        const result =List.filter((curData)=>{
            return curData.type===curItem;
        })
        setData(result)
    }
    return(
      <div>
        <h1 className="head">Take a Seat,Grap a Treat😍</h1>
        <div className="container" >
        <div className="buttons">
                <button className="btn" onClick={()=>filterResult("Vegitarian")}>Veg</button>
                <button className="btn" onClick={()=>filterResult("non-Veg")}>Non-veg</button>
                <button className="btn"  onClick={()=>filterResult("desserts")}>Desserts</button>
                <button className="btn" onClick={()=>setData(List)}>All</button>
              </div>
        
      <section>
        {data.map((item)=>(<Card key={item.id} item ={item} handleClick={handleClick}/>))}
      </section>
      </div>
      </div>
    )
}
export default Content;