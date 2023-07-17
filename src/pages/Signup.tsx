import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-wrap">
      <form>
        <h3>Create Account</h3>

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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter confirm password"
          />
        </div>
        <button type="submit">Sign up</button>
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
