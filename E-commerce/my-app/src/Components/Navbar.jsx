import React from "react";
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";

const Navbar = () => {
  const [value, setValue] = React.useState(false);
  const handleCart = () => {
    setValue(true);
  };

  return (
    <>
      <div style={{ display: "flex", border: "1px solid", height: "60px",background:'black',color:'white'}}>
        <div style={{ width: "40%" }}></div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
            <Link style={{color:'white'}} to='/'><div>All</div></Link>
            <Link style={{color:'white'}} to='/men'><div>men</div></Link>
            <Link style={{color:'white'}} to='/women'><div>women</div></Link>
            <Link style={{color:'white'}} to='/cart'><div>Go to Cart</div></Link>
          
        </div>
      </div>

    </>
  );
};

export default Navbar;
