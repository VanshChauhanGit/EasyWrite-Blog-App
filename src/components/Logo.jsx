import React from "react";

function Logo({ width = "w-4", className = "" }) {
  return (
    <div
      className={`text-2xl font-mono font-extrabold inline-block text-blue-700 hover:text-black dark:hover:text-white duration-700 transition-all hover:ease-in-out ${className}`}
    >
      EasyWrite
    </div>
  );
}

export default Logo;
