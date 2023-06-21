import React from "react";
import AuthLayout from "../../components/template/AuthLayout";
import Login from "../../components/organism/Login";
import Navbar from "../../components/organism/Navbar";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center  items-center gap-x-20 pt-10 overflow-hidden bg-[url('/images/about-bg.jpg')] bg-cover bg-center">
        <div className="flex flex-1 justify-center w-full">
          <AuthLayout title="Sign-In" desc="Welcome To Aigen">
            <Login />
          </AuthLayout>
        </div>
      </div>
    </>
  );
}
