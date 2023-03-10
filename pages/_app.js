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
  const publishableKey = process.env.PUBLISHABLE_KEY; // sign in isnt loading cause i think im using the deployment keys and not test
  const isPublicRoute = ["/", "/collection", "/about"].includes(pathname);
  return (
    // first part ClerkProvider is going to be changed for it to read the publishable key(watch video.) // try redeploying and change the domain name to custom one and try to make it all work together
    <ClerkProvider publishableKey={publishableKey} {...pageProps}>
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
