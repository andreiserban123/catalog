import { Link } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (
    <div>
      <nav className="h-screen w-20 border-2 bg-indigo-700  border-indigo-700 border-solid fixed left-0 rounded-br-3xl rounded-tr-3xl">
        <ul className="flex flex-col justify-start space-y-14 mt-5 h-full ">
          <li className="text-center text-xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ">
            <a
              className="text-white text-center hover: border-b-neutral-200 border-1 border-solid "
              href="/"
            >
              <span className="">Home</span>
              <i className="fa-solid fa-school"></i>
            </a>
          </li>
          <li className="text-center text-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
            <a className="text-white" href="/about">
              <div>Profile</div>
              <i className="fas fa-user"></i>
            </a>
          </li>
          <li className="text-center text-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <a className="text-white " href="/contact">
              Contact
              <i className="fa-solid fa-phone"></i>
            </a>
          </li>
          <li className="text-center text-xl font-bold fixed bottom-10 left-2 hover:animate-bounce w-6 h-6 ">
            <Link to="/login" className="text-white">
              <div>Logout</div>
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container h-screen ml-28">
        <h1 className="text-white text-center pt-20 text-5xl font-bold mb-20">
          You're loged as a STUDENT
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>09</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
