import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        <title>Designs OLBR</title>
      </Head>
      <header>
        <br />
        <NavBar />
      </header>
      <main className="w-full m-auto bg-white">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
