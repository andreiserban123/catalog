import Header from '../components/Header';
import Card from '../components/Card';
import { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-slate-800 bg-fixed  ">
      <Header />
      <div className="ml-20">
        <h1 className="text-white font-bold text-4xl text-center p-6">
          Hello Student!
        </h1>
        <hr className="border-b border-white w-1/2 self-center mx-auto my-2" />
        <div className="  h-screen grid grid-cols-1 place-items-center md:grid-cols-3 gap-4 ">
          {data.map((el, id) => {
            <Card materie={el.materie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
