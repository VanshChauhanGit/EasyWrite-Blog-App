import React from "react";

function Loader() {
  return (
    <>
      <div className="fixed -z-10 min-h-full min-w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#1D4ED8_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1D4ED8_100%)]"></div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    </>
  );
}

export default Loader;
