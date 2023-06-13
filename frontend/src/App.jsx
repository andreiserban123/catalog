import Login from "./routes/Login";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const hasJwtCookie = document.cookie.split(";").some((cookie) => {
    return cookie.trim().startsWith("jwt=");
  });
  return (
    <Router>
      <Routes>
        {
          // If the user has a jwt cookie, redirect to home page
          hasJwtCookie && <Route path="/" element={<Home />} />
        }
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
