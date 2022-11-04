import React from "react";
import './model.css';
import PaymentPage from "./PaymentPage";

const ProductCart = () => {
  const [allProducts, setProducts] = React.useState([]);
  const [ value, setValue ] = React.useState(false);

  React.useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("data")));
    console.log("hey:", allProducts);
  }, []);

  const handleDelete = (ele, i) => {
    console.log(ele,i)
    const temp = allProducts;
    temp.splice(i,1);
    console.log("Updated:",temp);
   
    localStorage.setItem("data", JSON.stringify(temp));
    // setProducts(temp)
    console.log('state',allProducts)
  };
  let total = 0;
  let count=0;
  allProducts.forEach((ele)=>{
    total=total+ele.price;
    count++;
  })
  console.log(total);

  const handlePay = () => {
        setValue(true);
  }

  return (
    <>
    <div style={{margin:'10px',backgroundColor:'aqua',border:'1px solid',padding:'0px 3%', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Quantitty: {count} </h2>
        <button className="pay" onClick={handlePay} style={{padding:'10px 30px',fontSize:'20px',fontWeight:'bold',}}>Pay</button>
        <h2>Total Price: ₹ {total}/-</h2>
    </div>
    <div style={{margin:'1% auto',padding:'10px',width:'70%'}}>
      {allProducts.map((ele, ind) => (
        <div
          key={ele.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin:'2% 0px 0px 0px',
            padding:'2%',
            boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
          }}
        >
          <div style={{ width: "150px", width: "18%", height: "150px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={ele.image}
              alt=''
            />
          </div>
          <div style={{ width: "40%",}}>
            <h4>{ele.title}</h4>
            <p>{ele.category}</p>
            <h5>Price: ₹ {ele.price}/-</h5>
            <button className="dlt_button" style={{padding:'5px 20px'}} onClick={() => handleDelete(ele, ind)}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
    {
        value && <PaymentPage />
    }
    </>
  );
};

export default ProductCart;
