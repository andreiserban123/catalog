const Card = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50">
      <div className="bg-indigo-100  border-black border-2  p-20  rounded-2xl flex flex-col items-center justify-around space-y-5">
        <h2 className="font-sans font-bold text-2xl">Mate</h2>
        <ul>
          <li>N:9</li>
          <li>N:9</li>
          <li>A:9</li>
        </ul>
        <button className="border-2  text-xl border-indigo-400 py-2 px-4 rounded-2xl hover:text-white hover:bg-indigo-700 hover:transition-opacity duration-200 ">
          Vezi mai mult
        </button>
      </div>
    </div>
  );
};
export default Card;
