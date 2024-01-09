/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, info) => {
      console.error("Error caught by error boundary:", error, info);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};
