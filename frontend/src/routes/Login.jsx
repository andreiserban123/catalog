import { Link } from "react-router-dom";
import { useRef } from "react";
import { Cookies } from "react-cookie";

import login from "../assets/login-indigo.jpg";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  async function onSubmit(e) {
    e.preventDefault();
    const cookies = new Cookies();
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        cookies.set("jwt", data.jwt, { path: "/" });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex items-center min-h-screen justify-center bg-indigo-400">
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to view your highschool account
          </p>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col space-y-3">
              <input
                ref={emailRef}
                type="email"
                className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter your email address"
              />
              <input
                ref={passwordRef}
                type="password"
                className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div className="font-thin text-indigo-700">Forgot password</div>
              <button
                type="submit"
                className="w-full md:w-full flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-indigo-500 shadow-indigo-300 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
              >
                <span>Next</span>
              </button>
            </div>
          </form>
        </div>
        <img src={login} className="w-[430px] hidden md:block" alt="" />
      </div>
    </div>
  );
};

export default Login;
