import React from "react";
import DetailProductLayout from "../../components/template/DetailProductLayout";
import Button from "../../components/atom/Button";

export default function DetailProductPages() {
  return (
    <DetailProductLayout>
      <div className="flex justify-center w-full mt-20 p-40">
        <div className="flex flex-col w-1/4 justify-center items-center space-y-8">
          <img src="/images/test2.jpg" alt="Gambar" />
          <div className="flex justify-center items-center gap-x-4 ">
            <Button>-</Button>
            <h1 className="text-5xl font-bold text-black">2</h1>
            <Button>+</Button>
          </div>
          <div>
            <Button>Buy Now!!</Button>
          </div>
        </div>
        <div className="flex flex-col w-3/4 space-y-8 p-8">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-5xl font-bold text-black">H&M Merch</h1>

            <img src="/images/heart.png" alt="Gambar" className="w-20 h-20" />
          </div>
          <h2 className="text-4xl font-bold text-black">Rp.50.000.000</h2>
          <p className="text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            nostrum omnis aut, odit doloremque magni atque voluptatibus quisquam
            laudantium sint vero dolor consequuntur consectetur, maiores
            cupiditate quaerat eligendi fugiat optio.
          </p>
        </div>
      </div>
    </DetailProductLayout>
  );
}
