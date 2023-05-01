import Login from './routes/Login';
import Home from './routes/Home';
import Juds from './components/Juds';
import Card from './components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/juds" element={<Juds />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
