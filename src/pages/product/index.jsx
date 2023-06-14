import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../components/organism/CardProduct";
import Navbar from "../../components/organism/Navbar";
import Footer from "../../components/organism/Footer";

const data = [
  {
    id: 1,
    images: "public/images/test2.jpg",
    desc: "Louis Vuitton",
    price: "Rp.100.000",
  },
  {
    id: 2,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 3,
    images: "public/images/test2.jpg",
    desc: "Stussy Merch",
    price: 100000,
  },
  {
    id: 4,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 5,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 6,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 7,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 8,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 9,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
  {
    id: 10,
    images: "public/images/test2.jpg",
    desc: "H&M Merch",
    price: 100000,
  },
];
export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-20"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Card List</h1>
      </div>
      <div className="flex flex-wrap min-h-screen justify-center items-center gap-10 py-10">
        {data.map((product) => (
          <Link
            key={product.id}
            to={{ pathname: `/products/${product.id}`, state: { product } }}
          >
            <CardProduct>
              <CardProduct.Header images={product.images} />
              <CardProduct.Body title={product.desc}>
                {product.desc}
              </CardProduct.Body>{" "}
              {/* Memperbaiki properti title */}
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center h-20"></div>
      <Footer />
    </>
  );
}
