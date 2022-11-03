import React from 'react';
import './animation.css'

const CurrentTime = () => {

    const [ time, setTime ] = React.useState();
    const [ date, setDate] = React.useState();


    React.useEffect(()=> {
        let reply = new Date();
        let answerTime = reply.toLocaleTimeString();
        let answerDate = reply.toLocaleDateString();
        console.log("Hello : ",reply.getSeconds());
        setTime(answerTime);
        setDate(answerDate);
    },[])
console.log(time)
    return (
        <div className='clock' style={{border: '2px dotted white', color:'white',background:'black', margin: '150px auto', width: '15%',height: '200PX',display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,borderRadius : '50%', padding: '30px'}}>
            <h1 style={{fontWeight: 'bold'}}>{time}</h1>
            <h4 style={{fontWeight: '400'}}>{date}</h4>
        </div>
    )
}
export default CurrentTime;