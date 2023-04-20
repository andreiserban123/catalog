import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container h-screen ml-28">
        <h1 className="text-white text-center pt-20 text-5xl font-bold mb-20">
          You're loged as a STUDENT
        </h1>
        <div className="grid grid-cols-4 gap-4 text-white">
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
