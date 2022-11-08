const Model = (props) => {
  const { data,handleDlt } = props;
  console.log("Hey from Mountains : ", data);
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      >
      <div
        style={{
          backgroundColor: "#f8f8ff",
          borderRadius:'5px',
          padding: "20px",
          width: "820px",
          height: "430px",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <div style={{margin:'auto 0px 10px auto',width:'25px',height:'20px',cursor:'pointer'}} onClick={handleDlt}>✖️</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "800px",
            height: "370px",
            border:'1px solid 	#778899',
            padding:'10px',
            borderRadius:'10PX'
          }}
        >
          <div style={{ width: "35%", height: "50%" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={data.urlToImage}
            />
          </div>
          <div style={{ width: "60%", }}>
            <h3>
              <span style={{ color: "red" }}>{data.author} : </span>
              {data.title}
            </h3>
            <h5 style={{ color: "#808080" }}>{data.description}</h5>
            <h5 style={{ color: "#808080" }}>{data.content}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
