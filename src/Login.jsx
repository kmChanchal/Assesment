import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const v = e.target.value;
    setMobile(v);
    if (!/^[0-9]{10}$/.test(v)) setError("Enter valid 10-digit mobile number");
    else setError("");
  };

  const submit = () => {
    if (login(mobile)) navigate("/dashboard");
    else alert("Login Failed");
  };

  return (
    <div className="box">
      <h2>Login</h2>
      <input value={mobile} onChange={handleChange} placeholder="Mobile Number" />
      {error && <p className="error">{error}</p>}
      <button onClick={submit}>Login</button>
    </div>
  );
}
