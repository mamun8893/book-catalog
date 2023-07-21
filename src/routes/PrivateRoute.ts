import { ReactNode } from "react";
import useAuth from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IProps) => {
  const navigate = useNavigate();
  const auth = useAuth();

  if (auth) {
    return children as JSX.Element;
  } else {
    navigate("/login");
  }
};

export default PrivateRoute;
