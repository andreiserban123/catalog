import { FaSchool, FaUserGraduate } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { CgLogOut } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    fetch('http://localhost:5000/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          toast.success('Logout successfully');
          setTimeout(() => {
            dispatch(setCurrentUser(null));
            navigate('/login');
          }, 1000);
        } else {
          toast.error('Logout failed');
        }
      });
  };
  return (
    <nav className="h-screen w-7 md:w-20 border-2 bg-indigo-700  border-indigo-700 border-solid fixed left-0 rounded-br-3xl rounded-tr-3xl">
      <ul className="flex flex-col justify-center text-center space-y-4 h-full md:justify-start md:items-center md:space-y-3  ">
        <li className="text-center text-xl font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ">
          <a
            className="text-white md:space-y-2 text-center hover: border-b-neutral-200 border-1 border-solid flex flex-col items-center "
            href="/"
          >
            <span className="hidden md:block">Home</span>
            <FaSchool />
          </a>
        </li>
        <li className="text-center text-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
          <a
            className="text-white flex flex-col md:space-y-2 justify-center items-center"
            href="/about"
          >
            <span className="hidden md:block">Profile</span>
            <FaUserGraduate />
          </a>
        </li>
        <li className="text-center text-xl font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
          <a
            className="text-white flex flex-col md:space-y-2 items-center justify-center "
            href="/contact"
          >
            <span className="hidden md:block">About</span>
            <MdContactSupport />
          </a>
        </li>
        <li className="md:h-full  text-xl text-center font-bold transition ease-in-out delay-150  hover:translate-x-0  hover: duration-300 ">
          <div className="text-white flex flex-col h-full md:items-center  md:space-y-2 ">
            <div
              className="md:mt-auto md:mb-2 hover:cursor-pointer"
              onClick={onClick}
            >
              <span className="hidden md:block">Logout</span>
              <CgLogOut className="ml-1" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
