import React from "react";
import axios from 'axios'

const AddData = () => {
  const [data, setData] = React.useState({ name: "", email: "",image_URL:"" });
  const [getPerson, setGetPerson] = React.useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const fetchData = () => {
    fetch("http://localhost:3000/user")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setGetPerson(res);
      })
      .catch((err) => console.log("Error message:", err));
  }

  React.useEffect(() => {
    fetchData();
  }, [getPerson]);

  const handleSubmit = () => {
    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const handleDelete = (id) => {
    console.log("ID:", id);
    axios({
        method: 'DELETE',
        url: `http://localhost:3000/user/${id}`
      });
  }

  return (
    <div id="container" style={{ }}>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='enter name' onChange={handleChange} />
        <input
          name='email'
          placeholder='enter email'
          onChange={handleChange}
        />
        <input
          name='image_URL'
          placeholder='enter image URL'
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
      <div id="rightSide_container">
        {
            getPerson.map((ele)=>(
              <div className="card" key={ele.id}>
                <div className="image_box">
                    <img src={ele.image_URL} />
                </div>
                <h3>{ele.name}</h3>
                <p>{ele.email}</p>
                <button onClick={()=>handleDelete(ele.id)}>DELETE</button>
              </div>
            ))
            }
      </div>
    </div>
  );
};

export default AddData;
