import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cardSlice";

const Cards = () => {
  const items = useSelector((state) => state.cart);
const dispatch = useDispatch()

const handleRemove = (dataId)=>{
  dispatch(remove(dataId))
}
  return (
    <>
      <h3>Card</h3>
      <div className="cartWrapper">
        {items.map((data) => (
          <div key = {data.id}className="cartCard">
            <img src={data.image} alt="" />
            <h5>{data.title}</h5>
            <h5>{data.price}</h5>
            <button className="btn" onClick={()=>handleRemove(data.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
