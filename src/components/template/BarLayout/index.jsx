import React from "react";

import Navbar from "../../organism/Navbar";
import Footer from "../../organism/Footer";

export default function BarLayout(props) {
  const { title } = props;
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer title={title} />
    </>
  );
}
