import { useAppSelector } from "../redux/hooks";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);
  console.log("use auth", auth);

  if (auth?.accessToken && auth?.user) {
    return true;
  } else {
    return false;
  }
}