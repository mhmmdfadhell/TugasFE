import React from "react";

export default function Client() {
  const clients = [
    { id: 1, image: "/images/client-1.png" },
    { id: 2, image: "/images/client-2.png" },
    { id: 3, image: "/images/client-3.png" },
    { id: 4, image: "/images/client-4.png" },
    { id: 5, image: "/images/client-5.png" },
    { id: 6, image: "/images/client-6.png" },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center">OUR CLIENT</h2>
      <div className="flex gap-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center px-5 py-20 "
          >
            <img
              src={client.image}
              alt={`Client ${client.id}`}
              className="  transition duration-300 opacity-50 hover:opacity-100 px-10 "
            />
            <div className="flex justify-center items-center ">
              <span className="text-white text-lg font-bold">
                Client {client.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
