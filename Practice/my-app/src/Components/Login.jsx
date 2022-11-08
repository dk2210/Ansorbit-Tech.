import "./Model.css";
import React from "react";
import Signup from "./Signup";

const Login = (props) => {
  const { handleDlt } = props;

  const [signUpValue, setSignUpValue] = React.useState(false);

  const [loginUser, setLoginUSer] = React.useState({
    email:'',password:''
  });

  const [ users,setUsers ] = React.useState();

  const handleSignUp = () => [setSignUpValue(true)];

  const handleChange = (event) => {
    const {name,value} = event.target;
    setLoginUSer({...loginUser,[name]: value})
  }

  const handleCloseSignUp = () => {
    setSignUpValue(false);
  };

  React.useEffect(()=>{
  setUsers(JSON.parse(localStorage.getItem('user')));
  },[])
  console.log("signup data",users);
  console.log("Logged in:",loginUser)

  const handleLogin = () => {
    let response;
    if(users.length==0){
      alert("InCorrect Credentials, If you are new user then Signup first");
    }else{
      response = users.filter((ele)=>{
        if(ele.email == loginUser.email && ele.password == loginUser.password){
          return ele ;
        }
      })
    }
    console.log(response)
    if(response.length==0){
      alert("InCorrect Credentials, If you are new user then Signup first")
    }else{
      localStorage.setItem('loggedinUSer',JSON.stringify(response));
      alert("Succesfully Logged in ! ");
    }
    handleDlt();
  }

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
          width: "500px",
          height: "300px",
          backgroundColor: "white",
          padding: "5px",
        }}
      >
        <div
          style={{
            margin: "auto 0px 10px auto",
            width: "25px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={handleDlt}
        >
          ✖️
        </div>
        <label style={{}}>Enter Credentials :</label>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "5% auto",
            width: "400px",
            height: "100px",
            border: "1px solid",
          }}
        >
          <input
            className='input'
            onChange={handleChange}
            name="email"
            type='text'
            placeholder='enter email'
          />
          <input
            className='input'
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='enter password'
          />
        </div>
        <div>
          <button
            className='login_button'
            onClick = {handleLogin}
            style={{
              padding: "8px 25px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        </div>
        <div>
          <p>
            If you don't have an account ?{" "}
            <span
              onClick={handleSignUp}
              style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      {signUpValue && <Signup handleCloseSignUp={handleCloseSignUp} />}
    </div>
  );
};

export default Login;
