import { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

export default function CarsPage() {
  const [carsData, setCarsData] = useState([])

  useEffect(() => {
    console.log("useEffect running");
    const token = localStorage.getItem("user_token")
    const getCarsData = async () => {
      const cars = await axios.get("http://localhost:9000/api/cars",
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      setCarsData(cars.data.data.cars)
    }

    getCarsData();
  }, []);
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [photo, setPhoto] = useState()

  const onChangeNameHandler = (e) => {
    const value = e.target.value;

    setName(value);
  };
  const onChangePriceHandler = (e) => {
    const value = e.target.value;

    setPrice(value);
  };
  const onChangeSizeHandler = (e) => {
    const value = e.target.value;

    setSize(value);
  };
  const onChangePhotoHandler = (e) => {
    const value = e.target.files[0];

    // if (value.type !== "image/png") {
    //   console.log("Format gambar harus .png");
    // }

    setPhoto(value);
  }
  // const onChangeCreatedByHandler = (e) => {
  //   const value = e.target.value;

  //   setCreatedBy(value);
  // };

  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();

    try {
      // const payload = {
      //   name,
      //   price,
      //   size,
      //   createdBy,
      // };
      // ini untuk kalo ada file yg diupload misal foto profil
        const payload = new FormData();

        payload.append("name", name);
        payload.append("price", price);
        payload.append("size", size);
        payload.append("photo", photo);
        // payload.append("createdBy", createdBy);
        const token = localStorage.getItem("user_token")
        
      const AddNewCarResponse = await axios.post(
        "http://localhost:9000/api/cars",
        payload,
        {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (AddNewCarResponse.status === 200) {
        console.log("berhasil ditambahkan");
        // navigate("/cars");
      }
    } catch (err) {
      console.log("gagal menambahkan:", err);
    }
  };
  const onDeleteButtonHandler = async (id) => {

    try {

      const token = localStorage.getItem("user_token")
      const DeleteCarResponse = await axios.delete(
        `http://localhost:9000/api/cars/${id}`,
        {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (DeleteCarResponse.status === 200) {
        console.log("berhasil didelete");
        // navigate("/cars");
      }
    } catch (err) {
      console.log("gagal menghapus:", err);
    }
  };

  return (
    <div>
      <h1><a href="/">Home</a></h1>
      <h1>Add new cars</h1>
      <div>
        Name: <input onChange={(e) => onChangeNameHandler(e)} />
      </div>
      <div>
        Price:  <input onChange={(e) => onChangePriceHandler(e)} />
      </div>
      <div>
        Size:  <input onChange={(e) => onChangeSizeHandler(e)} />
      </div>
      <div>
        Picture <input type="file" onChange={(e) => onChangePhotoHandler(e)} />
      </div>
      <button onClick={(e) => onSubmitButtonHandler(e)} >Add</button>
      <br/>
      <br/>
      <h1>List cars</h1>
      {carsData.map(car => <div key={car.id}>
        {car.name}
        <br/>
        {car.price}
        <br/>
        <img src={car.photo} alt=""/>
        <button onClick={() => onDeleteButtonHandler(car.id)} variant="danger" size="sm">DELETE</button>
      </div>)}

      
    </div>
  )
}
