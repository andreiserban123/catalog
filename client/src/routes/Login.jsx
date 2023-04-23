import { Link } from 'react-router-dom';

import login from '../assets/login.jpg';

const Login = () => {
  return (
    <div className="flex items-center min-h-screen justify-center bg-rose-50">
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to upload or download pictures, videos or
            music
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
            />
            <input
              type="password"
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <div className="font-thin text-cyan-700">Forgot password</div>
            <button className="w-full md:w-full flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-500 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Next</span>
            </button>
          </div>
        </div>
        <img src={login} className="w-[430px] hidden md:block" alt="" />
      </div>
    </div>
  );
};

export default Login;
