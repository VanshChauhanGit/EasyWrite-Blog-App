import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo, Loader } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data) => {
    setError("");
    try {
      setIsLoading(true);
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
        setIsLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return !isLoading ? (
    <div className="flex items-center justify-center w-full min-h-[80vh]">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100px" className="text-black" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don't have an account?
          <Link
            to="/signup"
            className="ml-1 font-medium text-blue-500 hover:text-blue-700 hover:underline transition-all duration-200"
          >
            Sign up
          </Link>
        </p>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              id="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              required
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full hover:bg-blue-400 active:bg-blue-600"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Login;
