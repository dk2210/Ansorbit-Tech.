import React from "react";

const Signup = (props) => {
   const {handleCloseSignUp } = props ;
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

let userData ;
if(localStorage.getItem('user')==null) {
    userData=[];
}else{
    userData=JSON.parse(localStorage.getItem('user'));
}

  const handleSubmit = () => {
    console.log(data)
    userData.push(data);
    localStorage.setItem('user',JSON.stringify(userData));
    handleCloseSignUp ()
};
console.log("hello from Mountains : ",userData)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "320px",
          backgroundColor: "white",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label style={{ fontWeight: "bold" }}>-: Sign Up :-</label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: "85%",
              margin: "20px 10px 10px",
              padding: "5px",
              justifyContent: "space-around",
            }}
          >
            <label>Enter name : </label>
            <input
              className='signup_input'
              onChange={handleChange}
              name='name'
              type='text'
            />
          </div>

          <div
            style={{
              display: "flex",
              width: "85%",
              margin: "10px",
              justifyContent: "space-around",
              padding: "5px",
            }}
          >
            <label>Enter email ID : </label>
            <input
              className='signup_input'
              onChange={handleChange}
              name='email'
              type='text'
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "85%",
              margin: "10px",
              justifyContent: "space-around",
              padding: "5px",
            }}
          >
            <label>Enter password : </label>
            <input
              className='signup_input'
              onChange={handleChange}
              name='password'
              type='password'
            />
          </div>
        </div>
        <div>
          <button onClick={handleSubmit} className='button'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
