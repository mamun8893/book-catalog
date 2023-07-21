/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

interface IUser {
  name?: string;
  email: string;
  password: string;
  accessToken?: string;
  user?: {
    email: string;
    id: number;
  };
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<IUser, Partial<IUser>>({
      query: (data: IUser) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
          console.log("err", err);
        }
      },
    }),
    login: builder.mutation({
      query: (data: IUser) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
