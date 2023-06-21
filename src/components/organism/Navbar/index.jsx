import React, { useState } from "react";
import Button from "../../atom/Button";

export default function Navbar() {
  const excludedPages = ["/"];
  const shouldShowNavbar = !excludedPages.includes(location.pathname);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleYes = () => {
    setShowModal(false);
    handleLogout();
  };

  const handleNo = () => {
    setShowModal(false);
  };

  if (!shouldShowNavbar) {
    return (
      <nav className="flex justify-between bg-black opacity-75 items-center px-20 py-5 fixed top-0 w-full">
        <p className="text-white font-bold text-xl border-l-4 border-green-700 px-3">
          Aigen
        </p>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between bg-black opacity-75 items-center px-20 py-5 fixed top-0 w-full">
      <p className="text-white font-bold text-xl border-l-4 border-green-700 px-3">
        Aigen
      </p>
      <ul className="text-white flex gap-x-8 text-md font-bold">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Portofolio</li>
        <li>Contact</li>
        <li>
          <button
            onClick={() => setShowModal(true)}
            className="text-white hover:text-green-700"
          >
            Logout
          </button>
        </li>
      </ul>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded">
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button
                onClick={handleYes}
                className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded mr-2"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
