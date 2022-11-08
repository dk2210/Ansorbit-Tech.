import React from 'react'
import Model from './Model'

const Containor = () => {
    const [ data, setData ] = React.useState([])
    const [ value,setValue ] = React.useState(false);
    const [ element, setElement ] = React.useState()

    React.useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=0edb13030e52457398ff4d8caf56458c').then((res)=>{return res.json()}).then((res)=>setData(res.articles)).catch((err)=>{console.log(err)})
    },[])

    const handleClick = (ele) => {
        setValue(true);
        setElement(ele);
    }

    const handleDlt = () => {
        setValue(false);
    }

    console.log(data)
    return(
        <div style={{padding:'10px'}}>
            {
                
                data.map((ele)=>(
                    <div key={ele.id} onClick={()=>handleClick(ele)} style={{display:'flex',borderRadius:'15px',margin:'0px 5px',height:'200px',padding:'20px',margin:'15px 0px 0px 0px',justifyContent:'space-between',alignItems:'center',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
                            <div style={{width:'28%',height:'200px'}}>
                                <img style={{width:'100%',height:'100%'}} src={ele.urlToImage} alt=''/>
                            </div>
                            
                            <div style={{padding:'20px',width:'68%',height:'200px',display:'flex',flexDirection:'column',justifyContent:'space-around '}}>
                                <h2> {ele.title}</h2>
                                <p style={{color:'darkgrey',fontWeight:'bold'}}>{ele.description}</p>
                            </div>
                    </div> 
                ))
            }
        {
            value && <Model data={element} handleDlt={handleDlt}/>
        }
        </div>
    )

}

export default Containor