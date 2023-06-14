import React from 'react'
import AuthLayout from '../../components/template/AuthLayout'
import Register from '../../components/organism/Register'
import Navbar from '../../components/organism/Navbar';
import Footer from '../../components/organism/Footer';

export default function SignUn() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center gap-x-20 pt-10 overflow-hidden">
        <div>
          <img src="/images/test.jpg" alt="Gambar" width={1000} height={750} />
        </div>
        <div>
          <AuthLayout title="Sign-Up" desc="">
            <Register />
          </AuthLayout>
        </div>
      </div>
      <Footer/>
    </>
  );
}

