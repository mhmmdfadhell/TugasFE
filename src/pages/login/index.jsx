import React from "react";
import AuthLayout from "../../components/template/AuthLayout";
import Login from "../../components/organism/Login";
import Navbar from "../../components/organism/Navbar";
import Footer from "../../components/organism/Footer";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="w-full h-20 "></div>
      <div className="flex justify-center items-center gap-x-20 pt-10 overflow-hidden">
        <div className="flex flex-1">
          <img src="/images/hom3.png" alt="Gambar" />
        </div>
        <div className="flex flex-1 justify-center w-full">
          <AuthLayout title="Sign-In" desc="Please Login">
            <Login />
          </AuthLayout>
        </div>
      </div>
      <Footer />
    </>
  );
}
