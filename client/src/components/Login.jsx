import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black text-center">
      <div className="container bg-white w-3/6 p-10 pt-20 border-solid border-4 border-sky-500 rounded-lg">
        <h1 className="text-5xl p-3 font-bold mb-2 underline">Login</h1>
        <form>
          <div className="p-2">
            <label className=" pr-2 font-bold text-2xl">Email</label>
            <input
              className="border-2 border-black border-solid rounded-lg w-72 h-10"
              type="email"
              name="email"
              id="email "
            />
          </div>
          <div className="p-2">
            <label className="font-bold pr-2 text-2xl">Password</label>
            <input
              className="border-2  border-black border-solid rounded-lg w-72 h-10"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <Link to="/">
            <button
              type="submit"
              className="mt-10 w-96  bg-blue-700 text border-2 border-none rounded-lg text-white font-bold py-2 px-10 text-center
            
            hover:bg-blue-500
            "
            >
              Login
            </button>
          </Link>
          <p className="text-sm mt-12">
            By clicking the login button, you agree to our
            <br />
            <a href="#" className="text-blue-500">
              Terms & Conditions
            </a>{' '}
            <span>and </span>
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
