import React from "react";
import Label from "../../atom/Label";

export default function Footer(props) {
  const { title } = props;
  return (
    <nav className="bg-[#111111] pt-10 bottom-0 w-full flex flex-col gap-y-8">
      <div className="flex justify-center gap-x-44 px-20">
        <div className="flex flex-1 flex-col">
          <Label text="Project Front End" />
          <p className="text-white font-bold text-xl border-l-4 border-green-700 px-3">
            {title}
          </p>
          <p className="text-white text-sm">
            Aigen is founded in 2017 as a Software Vendor for project management
            and banking area. Now it is growing as Solution Integrator and
            Consultants Provider to serve Banking, Private and Defense sectors.
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="w-fit">
            <h1 className="text-white font-bold border-b-2 border-green-700">
              Contact Us
            </h1>
            <p className="text-white">Jln Raya Rawa Buntu No 18D Serpong,</p>
            <p className="text-white">Tangerang Selatan 15318,</p>
            <p className="text-white">Indonesia</p>
            <p className="text-white">Phone: +6281389596906</p>
            <p className="text-white">Email: reach-us@aigen-global.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 bg-black w-full">
        <p className="text-white text-sm ">© 2023 Aigen. All Rights Reserved</p>
      </div>
    </nav>
  );
}
