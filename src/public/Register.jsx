import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAddNewUserMutation } from "../features/users/usersApiSlice";

export default function Register() {
  const [createNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     if (isSuccess) {
  //       navigate("/login");
  //     }
  //   });

  const onSubmit = async (data) => {
    setEmail(data.email);
    setUsername(data.username);
    setPassword(data.password);
    if (isChecked) {
      await createNewUser({
        username,
        password,
        email,
      });
    }
  };
  return (
    <div className="min-h-screen bg-transparent flex text-slate-900">
      <div className="hidden md:flex md:w-1/2"></div>
      <div className="w-full md:w-1/2 bg-slate-100">
        <form
          className="w-5/6 mx-auto my-5 md:my-[100px] flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Sign up
          </h1>
          <div className="flex flex-col gap-1 w-3/4 m-auto">
            <label
              className="font-semibold text-sm md:text-md"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`input text-black rounded-none border-b-4 border-teal-500 border-solid bg-white h-[40px] ${
                errors.username ? "border-red-500" : ""
              }`}
              id="username"
              type="text"
              autoComplete="off"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username must be at least 5 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not exceed 20 characters",
                },
              })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-3/4 m-auto">
            <label className="font-semibold text-md" htmlFor="password">
              Password
            </label>
            <input
              className={`input text-black rounded-none border-b-4 border-teal-500 border-solid bg-white h-[40px] ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="text"
              autoComplete="off"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 4,
                  message: "Username must be at least 5 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not exceed 20 characters",
                },
              })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-3/4 m-auto">
            <label className="font-semibold text-md" htmlFor="firstName">
              Email
            </label>
            <input
              className={`input text-black rounded-none border-b-4 border-teal-500 border-solid bg-white h-[40px] ${
                errors.username ? "border-red-500" : ""
              }`}
              id="username"
              type="text"
              autoComplete="off"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username must be at least 5 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not exceed 20 characters",
                },
              })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="flex gap-3 p-3 w-3/4 m-auto">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span>
              I agree with{" "}
              <span className="text-teal-500">terms and condition</span>
            </span>
          </div>
          <button
            className="btn h-[40px] rounded-none w-3/4 m-auto bg-teal-500 text-slate-50 font-bold text-lg hover:bg-teal-400"
            type="submit"
          >
            Register
          </button>
          <p className="w-3/4 m-auto">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-teal-500 underline">
                Sign in
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
