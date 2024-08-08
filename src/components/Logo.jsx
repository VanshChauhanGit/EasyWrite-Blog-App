import React from "react";

function Logo({ width = "w-4", className = "" }) {
  return (
    <div
      className={`text-2xl font-mono font-extrabold inline-block duration-700 transition-all hover:ease-in-out ${className}`}
    >
      EasyWrite
    </div>
  );
}

export default Logo;
