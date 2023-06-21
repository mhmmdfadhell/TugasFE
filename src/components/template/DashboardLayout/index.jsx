import React from "react";
import BarLayout from "../../template/BarLayout";
import Button from "../../atom/Button";

const DashboardLayout = ({ children, desc, title }) => {
  return (
    <BarLayout title="Aigen">
      <div className="flex flex-col items-center justify-center w-full h-screen bg-dashboardImage bg-cover bg-no-repeat gap-y-8">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="text-white text-center">{desc}</p>
        <Button color="bg-green-400 rounded-full px-10 py-2">
          Get started
        </Button>
      </div>
      <div className="flex w-full">{children}</div>
    </BarLayout>
  );
};

function Body(props) {
  const { row, src, name, title, desc } = props;
  return (
    <div className="flex justify-center items-center w-full">
      <div className={`flex flex-col justify-center items-center m-4 ${row}`}>
        <img className="w-64 h-64 object-cover" src={src} alt={name} />
        <div className="ml-2 flex flex-col justify-center items-center m-4">
          <h3 className="text-lg font-bold ">{title}</h3>
          <p className=" text-center text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

DashboardLayout.Body = Body;

export default DashboardLayout;
