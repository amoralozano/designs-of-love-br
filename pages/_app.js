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

// even with publishable key is given it still does not read it for some reason.

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  // publishableKey = process.env.EXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const isPublicRoute = ["/", "/collection", "/about"].includes(pathname);
  return (
    <ClerkProvider
      publishableKey="pk_live_Y2xlcmsuZGVzaWducy1vZi1sb3ZlLW9saHdpaWFvbi1hbW9yYWxvemFuby52ZXJjZWwuYXBwJA"
      {...pageProps}
    >
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
