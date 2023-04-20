import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl md:w-3/12 md:h-96">
        <form className="flex flex-col gap-2">
          <label
            htmlFor="login"
            className="text-white p-2 font-bold md:text-2xl"
          >
            Email
          </label>
          <input
            type="email"
            className=" 
            p-2
            px-4
            text-center
            text-white
            bg-zinc-800
            border
            border-zinc-600
            placeholder:text-xs
            placeholder:text-center
            md:text-left
            md:text-xl
            "
          />
          <label
            htmlFor="login"
            className="text-white p-2 font-bold md:text-2xl"
          >
            Password
          </label>
          <input
            type="password"
            className=" 
            p-2
            px-4
            text-center
            text-white
            bg-zinc-800
            border
            border-zinc-600
            placeholder:text-xs
            placeholder:text-center
            md:text-left
            "
          />
          <Link to="/" className="self-center mt-5 mb-2">
            <button className="px-5 py-3 text-xl rounded-md text-white bg-indigo-500 hover:bg-indigo-700 hover:text-white duration-500 md:px-10 md:py-6 md:text-2xl">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
