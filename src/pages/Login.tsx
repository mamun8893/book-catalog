import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-wrap">
      <form>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Login</button>
        <p>
          Don't have an account <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
