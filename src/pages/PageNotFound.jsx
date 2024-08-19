import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-[100vh] flex flex-col justify-center">
      <h1 className="text-blue-500">404: Page Not Found</h1>
      <p className="text-xl">
        The page you are looking for does not exist.{" "}
        <Link to="/" className="text-blue-800 underline hover:text-blue-600 ">
          Go to Home
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
