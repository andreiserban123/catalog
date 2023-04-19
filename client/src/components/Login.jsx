import '../styles/login.css';
const Login = () => {
  return (
    <div>
      <div id="container">
        <div className="form-wrap">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p className="bottom-text">
              By clicking the login button, you agree to our
              <br />
              <a href="#">Terms & Conditions</a> <span>and</span>
              <a href="#"> Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
