const Card = ({ materie }) => {
  return (
    <div className="bg-indigo-100 border-indigo-900 border-4 shadow-2xl shadow-indigo-700  p-20  rounded-2xl flex flex-col items-center justify-around space-y-5">
      <h2 className="font-sans font-bold text-2xl underline-offset-1">
        {materie}
      </h2>
      <ul>
        <li className="text-lg">N:9</li>
        <li className="text-lg">T:9</li>
        <li className="text-lg">A:9</li>
      </ul>
      <button className="border-2 text-xl bg-indigo-700 text-white py-2 px-4 rounded-2xl hover:text-white hover:bg-indigo-400 hover:transition-opacity duration-200 ">
        Vezi mai mult
      </button>
    </div>
  );
};
export default Card;
