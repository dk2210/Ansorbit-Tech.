import React from 'react'
import { Navigate, useNavigate } from 'react-router';

const PaymentPage = () => {
    const[ buttonValue, setButtonValue ] = React.useState(true)
    const[ processValue, setProcessValue ] = React.useState(false);
    const [ confrimOrder, setConfirmOrder ] = React.useState(false);
    const navigate = useNavigate();

    const handleConfirm = () => {
        setButtonValue(false);
        setProcessValue(true);
    }
    if(processValue){
        setTimeout(()=>{
            console.log("Hello")
            setProcessValue(false);
            setConfirmOrder(true)
        },1500)
    }
    if(confrimOrder)(
        setTimeout(()=>{
            navigate('/')
        },4000)
    )
    return(
        <div style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}>
            <div style={{
                backgroundColor: 'white',
                width:'400px',
                height:'400px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
            }}>
                {
                    buttonValue && <button className='confirm_button' onClick={handleConfirm} style={{padding:'20px', fontSize:'20px',fontWeight:'bold',cursor:'pointer'}}>Confirm Order</button>
                }
                {
                    processValue && <div><img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="IN-PROCESS" /></div>
                }
                {
                    confrimOrder && <div><img src="https://i.pinimg.com/originals/f1/7d/1a/f17d1abee9a9ee985cbc35b0927c4f17.gif" alt="ORDER-CONFIRMED" /></div>
                }
            </div>
        </div>
    )
}

export default PaymentPage ;