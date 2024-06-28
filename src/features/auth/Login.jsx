import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useForm } from "react-hook-form";

const Login = () => {
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

  // const userRef = useRef();
  // const errRef = useRef();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [username, password]);

  // const errClass = errMsg ? "errmsg" : "offscreen";

  // if (isLoading) return <p>Loading...</p>;

  const content = (
    <div className="min-h-screen bg-transparent flex text-slate-900">
      <div className="hidden md:flex md:w-1/2"></div>
      <div className="w-full md:w-1/2 bg-slate-100">
        <form className="w-5/6 mx-auto my-5 md:my-[100px] flex flex-col gap-5">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Sign in
          </h1>
          <div className="flex flex-col gap-1 w-3/4 m-auto">
            <label
              className="font-semibold text-sm md:text-md"
              htmlFor="firstName"
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
            <label className="font-semibold text-md" htmlFor="firstName">
              Password
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

          <div className="flex gap-3 w-3/4 m-auto">
            <p>Remember me</p>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <button className="btn h-[40px] rounded-none w-3/4 m-auto bg-teal-500 text-slate-50 font-bold text-lg hover:bg-teal-400">
            Login
          </button>
          <p className="w-3/4 m-auto">
            Don't have an accout yet?{" "}
            <span>
              <Link to="/register" className="text-teal-500 underline">
                Sign up
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );

  return content;
};
export default Login;
