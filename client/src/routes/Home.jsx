import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="bg-slate-800  ">
      <Header />

      <div className="ml-20">
        {/* Main hero */}
        <h1 className="text-white font-bold text-4xl text-center p-6">
          Hello Student!
        </h1>
        <div className="  h-screen grid grid-cols-1 place-items-center md:grid-cols-3 gap-4 ">
          <Card materie="mate" />
          <Card materie="romana" />
          <Card materie="istorie" />
          <Card materie="franceza" />
          <Card materie="informatica" />
        </div>
      </div>
    </div>
  );
};
export default Home;
