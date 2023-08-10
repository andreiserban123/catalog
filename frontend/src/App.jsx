import { useEffect } from 'react';
import Home from './routes/Home';

const App = () => {
  useEffect(() => {
    fetch('https://localhost:5000/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
