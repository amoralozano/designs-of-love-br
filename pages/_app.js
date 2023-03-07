import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { NavBar } from "../components";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicRoute = ["/", "/collection", "/about"].includes(pathname);
  return (
    <ClerkProvider {...pageProps}>
      {isPublicRoute ? (
        <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      ) : (
        <>
          <SignedIn>
            <StateContext>
              <Layout>
                <Toaster />
                <Component {...pageProps} />
              </Layout>
            </StateContext>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
