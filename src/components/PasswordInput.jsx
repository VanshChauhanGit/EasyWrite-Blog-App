import React, { useState, forwardRef, useId } from "react";

function PasswordInput(
  { label = "Password", className = "", labelClassName = "", ...props },
  ref
) {
  const id = useId();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full">
      {label && (
        <label
          className={`flex font-semibold mb-1 pl-1 ${labelClassName}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center rounded-md shadow-lg overflow-hidden mb-4">
        <input
          type={passwordVisible ? "text" : "password"}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          placeholder="Enter your password"
          {...props}
          ref={ref}
          id={id}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 text-lg text-gray-600 focus:outline-none px-2"
        >
          {passwordVisible ? (
            <i className="fa-regular fa-eye-slash"></i>
          ) : (
            <i className="fa-regular fa-eye"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default forwardRef(PasswordInput);
