

const Middle = () => {
    return(
     <div style={{display:'flex',zIndex:'2', flexDirection:'column',height:'300px',padding:'40px 40px 100px 40px',}}>

        <div style={{display:'flex', flexDirection:'column',}}>
            <p style={{color:' #1d42d9'}}>Careers</p>
            <h1 style={{margin:'5px',color:'#293a5c',fontFamily:'Catamaran, sans-serif'}}>Join Our Team</h1>
        </div>

        <div style={{margin:'50px 0px 0px 0px',display:'grid',gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'180px', gap:'20px' }}>
            <div style={{border: '1px solid #dee2e6',textAlign:'left',paddingLeft:'25px',color:"#293a5c"}}>
                <h2>MERN Developer</h2>
                <p style={{fontWeight:'bold'}}>Experience : 2 to 4 years</p>
                <p style={{fontWeight:'300'}}>Ahmedabad, Gujarat</p>
                <p style={{color:' #70a1ff',fontWeight:'300'}}>Read more</p>
            </div>
            <div style={{border: '1px solid #dee2e6',textAlign:'left',paddingLeft:'25px',color:"#293a5c"}}>
                <h2>React Developer</h2>
                <p style={{fontWeight:'bold'}}>Experience : 2 to 4 yrs</p>
                <p style={{fontWeight:'300'}}>Ahmedabad, Gujarat</p>
                <p style={{color:' #70a1ff',fontWeight:'300'}}>Read more</p>
            </div>
            <div style={{border: '1px solid #dee2e6',textAlign:'left',paddingLeft:'25px',color:"#293a5c"}}>
                <h2>.Net Developer</h2>
                <p style={{fontWeight:'bold'}}>Experience : 2 to 4 years</p>
                <p style={{fontWeight:'300'}}>Ahmedabad, Gujarat</p>
                <p style={{color:' #70a1ff',fontWeight:'300'}}>Read more</p>
            </div>
            
        </div>
     </div>
     )
}

export default Middle;