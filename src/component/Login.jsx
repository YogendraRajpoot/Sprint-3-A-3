import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/Authcontext";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // this part is make for local storage check

  // useEffect(() => {
  //   if (localStorage.getItem("Token") !== null) {
  //     console.log(localStorage.getItem("Token"));
  //     login(localStorage.getItem("Token"));
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch(`https://reqres.in/api/login`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        // localStorage.setItem("Token", res.token); //this part store data in localstorage
        login(res.token);
      })
      .catch((err) => console.log(err));
  };

  const { email, password } = form;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
