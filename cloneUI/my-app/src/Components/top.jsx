import './animation.css';

const Top = () => {
  return (
    <div
      style={{
          display: "flex",
          flexDirection:'column',
          height: "230PX",
          color: "white",zIndex:'1',
          background: "#051242",
          fontFamily: "Open Sans, sans-serif",
      }}
    >
        <h1 style={{margin:'0px', fontSize: "40px" }}>Careers</h1>
      <div className='shape_1' style={{}}>
        <img
          src='https://www.ansorbit.com/assets/images/shape/1.png'
          alt='shape-2'
        />
      </div>
      <div className='shape_2' style={{}}>
        <img
          src='https://www.ansorbit.com/assets/images/shape/3.png'
          alt='shape-2'
        />
      </div>
      <div className='shape_3' style={{}}>
        <img
          src='https://www.ansorbit.com/assets/images/shape/4.png'
          alt='shape-3'
        />
      </div>
      
    </div>
  );
};

export default Top;
