import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atom/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form action="" className="w-full p-10">
      <InputForm label="Email" type="email" placeholder="masukan email" />
      <InputForm
        label="Password"
        type="password"
        placeholder="masukan password"
      />
      <Link to="/product">
        <Button color="bg-blue-500 w-full">Login</Button>
      </Link>
    </form>
  );
}
