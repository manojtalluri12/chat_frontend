import React from "react";
import { useMydata } from "../../TodoProvider.js/TodoProvider.js";
const Login = () => {
  const { email, setemail, password, setpassword, handleLogin,token,settoken } = useMydata();
  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
          className="input"
        />
        <button className="btn">SignIn</button>
      </form>
    </div>
  );
};
export default Login;
