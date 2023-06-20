import Login from "./routes/Login";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const hasJwtCookie = document.cookie.split(";").some((cookie) => {
    return cookie.trim().startsWith("jwt=");
  });

  if (hasJwtCookie) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  } else {
    return <Login />;
  }
};

export default App;
