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
  // const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY; // sign in isnt loading cause i think im using the deployment keys and not test
  const isPublicRoute = ["/", "/collection", "/about"].includes(pathname);
  return (
    // first part ClerkProvider is going to be changed for it to read the publishable key(watch video.) // try redeploying and change the domain name to custom one and try to make it all work together
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

// CLERK_JWT_KEY=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2Hp1F99gLK3/7w5j5V9/
// AzaMUVQwKKf2TpC1P1D241IalUWJfhF+qBNgp2ZArF+l94A7t6MJcPL5c+wqgaYx
// HlqjJjk1SNDmIRxqdupy3t3u7Ukz0TmGctKM7Xjtb3l+dnlesPhJrzJVj3kbE8qv
// 3ps3gMYQqmb49cQSx3hxcxhbkJ5OIpMhfIJZy+uji/ueZH1FS5lgnctEugRi2/kD
// aIhJABwqMYvhx3H5ackA1+/VhLMVfNlcCW7NSBuXAE+MkbJNZfb/5brKZYdqAN8/
// TlMXayCObA3KeHLJxC/y3m9hgCUHFbAG1MNSsYRFMFxzqmVuy++9HnmbkAqCb2ed
// gwIDAQAB

/// above is if code breaks more lol. belongs in env.local file
