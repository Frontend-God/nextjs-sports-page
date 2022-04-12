import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    require("jquery/dist/jquery.min.js");
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
