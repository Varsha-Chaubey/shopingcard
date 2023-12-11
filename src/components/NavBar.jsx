import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">React Redux</span>
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/card" className="navLink">
          Card
        </Link>
      </div>
      <span className="cartCount">Cards Items: {items && items.length}</span>
    </div>
  );
};

export default NavBar;
