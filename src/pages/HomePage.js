import { useEffect, useState } from "react";
import "./home-page.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      try {
        const jwtToken = localStorage.getItem("user_token");

        const validateTokenResponse = await axios.get(
          "http://localhost:9000/auth/me",
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        //biar nggk balik lagi ke login
        if (validateTokenResponse.status !== 200) {
          navigate("/login");
        } else {
          // console.log(validateTokenResponse.data.data.user);
          setLoggedInUser(validateTokenResponse.data.data.user);
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    checkIsLoggedIn();
  });
  
  const logoutEventHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("user_token");
    setLoggedInUser(null);
  };

  return (
    <div>
      {/* <Header /> */}
      <h3>Home Page</h3>
      <h2>Selamat datang, {loggedInUser ? loggedInUser.name : "Loading..."}</h2>
      <button onClick={(e) => logoutEventHandler(e)}>Logout</button>
      <br />
      <a href="/about">Pindah ke halaman about pake href</a>
      <br />
      <Link to="/about">Pindah ke halaman about pake link</Link>
      <br />
      <Link to="/cars">Cars Section</Link>
    </div>
  );
}

export default HomePage;
