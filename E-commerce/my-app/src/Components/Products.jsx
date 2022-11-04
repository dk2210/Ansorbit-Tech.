import React from "react";
import Model from "./Model";
import './model.css'

// const

const Products = () => {
  const [data, setData] = React.useState([]);
  const [signlePro, setSinglePro] = React.useState();
  const [value, setValue] = React.useState(false);
//   const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const viewProduct = (ele) => {
    setValue(true);
    setSinglePro(ele);
  };
  const handleClose = () => {
    setValue(false);
  };
  // setCount((c)=>c+1)
  const addToCart = (ele) => {
      let product;
      if(localStorage.getItem("data")==null){
        product=[];
      }else{
        product=JSON.parse(localStorage.getItem("data"));
      }
      product.push(ele);
      setValue(false);
      localStorage.setItem("data", JSON.stringify(product));
    console.log("hey", product);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "20%",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        flexWrap: "wrap",
        padding:'20px'
      }}
    >
      {data.map((ele) => (
        <div
          style={{
            border: "1px solid #D3D3D3",
            borderRadius:'10px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={ele.id}
        >
          <div
            style={{
              width: "100px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={ele.image}
              alt='product-cover'
            />
          </div>
          <p style={{ width: "80%", height: "5%" }}>{ele.title}</p>
          <p>{ele.price}/-</p>
          <p>{ele.category}</p>
          <button className="info_button" onClick={() => viewProduct(ele)}>More info</button>
        </div>
      ))}
      {value && (
        <Model
          data={signlePro}
          handleClose={handleClose}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Products;
