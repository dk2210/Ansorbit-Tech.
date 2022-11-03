

const Navbar = () => {
    return ( 
        <div style={{padding:'5px 25px',position:'sticky',top:'0',display: 'flex',justifyContent:'space-between',alignItems:'center', height: '100px', background: '#051242'}}>

            <div style={{width: '150px', height:'70px'}}>
                <img  style={{width:'100%',height:'100%'}} src="https://www.ansorbit.com/assets/images/logo.png" alt="no-internet" />
            </div>
            <div style={{padding:'20px',display: 'flex',justifyContent:'space-between',alignItems:'center',width:'30%',height: '60px'}}>
                <div style={{color:'white'}}>Home</div>
                <div style={{color:'white'}}>Blogs</div>
                <div style={{color: '#70a1ff'}}>Careers</div>
                <div style={{color:'white',border:' 1px solid #1d42d9',borderRadius:'5px',padding:' 10px 25px',background:'#1d42d9'}}>Contact</div>
            </div>
        </div>
    )
}

export default Navbar