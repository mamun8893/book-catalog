/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useEffect } from "react";
import { toastError, toastSuccess } from "../utils/helper";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  //handle mutation

  const [login, { isSuccess, error, isError }] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { email, password } = data;
    login({
      email,
      password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toastSuccess("Lgoin Successfull");
      reset();
      navigate("/");
    } else if (isError) {
      const { data } = error as any;
      toastError(data);
    }
  }, [isSuccess, isError]);
  return (
    <div className="auth-wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>

        <button type="submit">Login</button>
        <p>
          Don't have an account <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
