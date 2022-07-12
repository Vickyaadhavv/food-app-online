import React from "react";

const Card = ({item, handleClick})=>{  
    const { title,type,price,image}=item;
return(
    <div className="cards">
     <div className="image_box">
        <img src={image} alt="img" />
     </div>
     <div className="details">
        <p>{title}</p>
        <p>{type}</p>
        <p>{price}</p>
        <button onClick={()=>handleClick(item)}>Add to cart</button>        
     </div>
    </div>
)
};
export default Card;