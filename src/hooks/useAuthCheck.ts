/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { userLoggedIn } from "../redux/features/auth/authSlice";

interface ILocalAuth {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth: string | null = localStorage?.getItem("auth");

    if (localAuth) {
      const auth: ILocalAuth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
