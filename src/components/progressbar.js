import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Ensure this is imported
import '../styles/nprogress-custom.css'

NProgress.configure({ showSpinner: false });

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 1200);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);

  return null; // This renders nothing visible
};

export default ProgressBar;
