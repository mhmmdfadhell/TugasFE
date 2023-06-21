import React from "react";

export default function AuthLayout(props) {
  const { children, title, desc } = props;
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="rounded-lg bg-gradient-to-r bg-green-200 from-green-500 via-green-700 to-green-500 p-1">
          <div className="flex justify-center items-center flex-col w-full border rounded-lg p-8 bg-white ">
            <h1 className="text-3xl font-bold mb-2 text-green-500 ">{title}</h1>
            <p className="font-medium text-slate-500 mb-4">{desc}</p>
            <div className="flex w-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
