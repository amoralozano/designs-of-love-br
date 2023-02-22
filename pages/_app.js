import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { Provider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider session={pageProps.session}>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    // </Provider>
  );
}

export default MyApp;
