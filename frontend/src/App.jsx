import Login from "./routes/Login";
import Home from "./routes/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const hasToken = localStorage.getItem("jwt");
  return (
    <Router>
      <Routes>
        {hasToken ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
