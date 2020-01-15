import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const SignIn = () => {
  //   const [userInfo, setUserInfo] = useState({
  //     username: "",
  //     email: "",
  //     password: ""
  //   });

  //   //handleChange
  //   const handleChange = e => {
  //     const { name, value } = e.target;

  //     setUserInfo({
  //       ...userInfo,
  //       [name]: value
  //     });
  //   };

  const [userInfo, setUserInfo, handleChange] = useForm("sign-in", {
    username: "",
    email: "",
    password: ""
  });

  //handleSubmit
  const handleSubmit = e => {
    e.preventDefault();

    console.log(userInfo);
    setUserInfo({ username: "", email: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="ind-field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userInfo.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="ind-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userInfo.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="ind-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userInfo.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Sign-In</button>
    </form>
  );
};

export default SignIn;
