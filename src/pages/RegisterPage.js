import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNameHandler = (e) => {
    const value = e.target.value;

    setName(value);
  };
  const onChangeRoleHandler = (e) => {
    const value = e.target.value;

    setRole(value);
  };
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
        name,
        role,
        email,
        password,
      };
      // ini untuk kalo ada file yg diupload misal foto profil
      //   const payload = new FormData();

      //   payload.append("name", name);
      //   payload.append("role", role);
      //   payload.append("email", email);
      //   payload.append("password", password);

      const registerResponse = await axios.post(
        "http://localhost:9000/auth/register",
        payload
      );

      if (registerResponse.status === 201) {
        // console.log("berhasil daftar");
        navigate("/login");
      }
    } catch (err) {
      console.log("gagal daftar:", err);
    }
  };

  return (
    <div>
      <div>
        Name: <input onChange={(e) => onChangeNameHandler(e)} />
      </div>
      <div>
        Role: <input onChange={(e) => onChangeRoleHandler(e)} />
      </div>
      <div>
        Email: <input onChange={(e) => onChangeEmailHandler(e)} />
      </div>
      <div>
        Password: <input onChange={(e) => onChangePasswordHandler(e)} />
      </div>
      <button onClick={(e) => onSubmitButtonHandler(e)}>Register</button>
    </div>
  );
}
