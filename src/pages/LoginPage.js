import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = (e) => {
    const value = e.target.value;

    setEmail(value);
  };

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;

    setPassword(value);
  };
  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email,
        password,
      };

      const registerResponse = await axios.post(
        "http://localhost:9000/auth/login",
        payload
      );

      if (registerResponse.status === 200) {
        console.log("berhasil daftar");

        const jwtToken = registerResponse.data.data.token;

        localStorage.setItem("user_token", jwtToken);

        navigate("/");
      }
    } catch (err) {
      console.log("gagal login:", err);
    }
  };

  return (
    <div>
      {/* colom 1 */}
      <div class="grid grid-cols-2 place-items-center m-0">
        <div class="w-full h-[655px] bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
          <h1 class="text-center mt-8 pt-8 text-white font-bold text-2xl font-mono">LOGIN</h1>
          <form class="border rounded-lg pr-8 pb-8 shadow-2xl bg-white m-[150px] mt-8">
            <div class="md:flex md:items-center mb-6 mt-8 pt-8">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Email
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  onChange={(e) => onChangeEmailHandler(e)}
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Password
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  onChange={(e) => onChangePasswordHandler(e)}
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3 mb-4 mt-3">
                <button
                  onClick={(e) => onSubmitButtonHandler(e)}
                  class="mr-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-9 w-[230px] rounded"
                  type="button"
                >
                  <Link to="/register" class="no-underline text-white">
                    Login
                  </Link>
                </button>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="ml-8 pl-4 mt-3">
                <p class="font-bold text-black">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    class="no-underline text-red-600 font-bold"
                  >
                    Register
                  </Link>{" "}
                  now!
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* <div>
          <div>
            Email: <input onChange={(e) => onChangeEmailHandler(e)} />
          </div>
          <div>
            Password: <input onChange={(e) => onChangePasswordHandler(e)} />
          </div>
          <button onClick={(e) => onSubmitButtonHandler(e)}>Login</button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div> */}

        {/* colom 2 */}
        <div class="w-full h-[580px]">
          {/* <img src="../assets/img_car.png" alt=" " /> */}
          <img src="https://upload.wikimedia.org/wikipedia/id/6/66/Wednesday_Netflix_series_poster.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
        </div>
      </div>
    </div>
  );
}
