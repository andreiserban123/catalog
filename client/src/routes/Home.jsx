import Header from '../components/Header';

const Home = () => {
  return (
    <div className="bg-slate-800">
      <Header />

      {/* Main hero */}
      <div className=" ml-20">
        <h1 className="text-white font-bold text-4xl  h-screen flex items-center justify-center">
          Hello Student
        </h1>
      </div>
    </div>
  );
};
export default Home;
