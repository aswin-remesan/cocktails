import '../styles/globals.css'
import Loading from "../components/Loading";

import React from 'react';
import Router from 'next/router';
import {useState} from "react"


function MyApp({ Component, pageProps }) {

  const [ loading, setLoading ] =useState(false)

  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setLoading(true);
  };

  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setLoading(false);
  };






  if (loading) return <Loading />;
  return <Component {...pageProps} />
}

export default MyApp
