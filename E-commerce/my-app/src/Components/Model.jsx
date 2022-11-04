import { element } from "prop-types";
import './model.css';
import React from 'react'

const Model = (props) => {
  const { data, handleClose, addToCart } = props;
    // const addToCart = () => {
    //     console.log(data)
    //     setProduct({...product,data})
    //     console.log("hey",product)
    //     localStorage.setItem('data',JSON.stringify(product));
    // }
    //
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          border: "1px solid",
          width: "600px",
          height: "400px",
          display: "flex",
          alignItems: "",
          backgroundColor:'white',
          justifyContent: "space-evenly",
        //   color: "white", 
          padding:'20px',
        }}
      >
        <div 
          className="model_containor"
          style={{letterSpacing:'2.5px',width: "300px", height: "100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}
        >
            <div style={{width:'150px', height:'150px'}}>
               <img
            style={{ width: "100%", height: "100%" }}
            src={data.image}
            alt=''
          /> 
            </div>
          
          <p style={{ width: "300px"}}>{data.description}</p>
        </div>
        <div 
        style={{ width: "40%", display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between' }}>
          <h2 className="model_containor">{data.title}</h2>
          <h2 className="model_containor">Price : {data.price}/-</h2>
          {/* <h4>Rating: {data.rating}</h4> */}
          <h3 className="model_containor">Rating : {data.rating.rate}</h3>
          <p className="model_containor"> Category: {data.category}</p>
          <div className="model_containor" style={{display:'flex',  width:'110%',justifyContent:'space-evenly',height:'40px'}}>
            <button onClick={handleClose} className="model_button" style={{fontSize:'17px',borderRadius:'5px', padding:'5px 25px',textAlign:'center'}}>Cancel</button>
            <button onClick={()=>addToCart(data)} className="model_button" style={{fontSize:'17px',borderRadius:'5px', padding:'5px 25px',textAlign:'center'}}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
