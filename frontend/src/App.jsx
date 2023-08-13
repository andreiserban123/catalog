import { useEffect } from 'react';
import Home from './routes/Home';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();

  // get the user state from redux store
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user === undefined) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
};
export default App;
