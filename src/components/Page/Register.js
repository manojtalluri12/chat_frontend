import React from "react";
import { useMydata } from "../../TodoProvider.js/TodoProvider.js";
const Register = () => {
  const {
    username,
    setusername,
    email,
    setemail,
    password,
    setpassword,
    confirmpassword,
    setconfirmpassword,
    hanldeSignUp,
  } = useMydata();
  return (
    <div className="center">
      <h1>Sign Up</h1>
      <form onSubmit={hanldeSignUp} className="form">
        <input
          type="text"
          value={username}
          placeholder="Enter Name"
          onChange={(e) => setusername(e.target.value)}
          className="input"
        />
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
        <input
          type="password"
          value={confirmpassword}
          placeholder="Enter ConfirmPassword"
          onChange={(e) => setconfirmpassword(e.target.value)}
          className="input"
        />
        <button className="btn">SignUp</button>
      </form>
    </div>
  );
};

export default Register;
