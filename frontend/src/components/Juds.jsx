import { useEffect, useState } from 'react';

const Juds = () => {
  const [juds, setJuds] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/catalogue/juds')
      .then((res) => res.json())
      .then((data) => {
        const judList = data.data.map((jud) => {
          return (
            <li key={jud[0]}>
              <h2>{jud[1]}</h2>
              <p>With the id {jud[0]}</p>
            </li>
          );
        });
        setJuds(judList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-black text-center text-red-500">
      <h1 className="font-bold">Here are the juds</h1>
      <br />
      <ul>{juds}</ul>
    </div>
  );
};
export default Juds;
