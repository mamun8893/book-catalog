/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IBook } from "../../../types/globalTypes";
import { apiSlice } from "../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBooks: builder.mutation({
      query: (data: IBook) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    getLatestBooks: builder.query({
      query: () => ({
        url: "/books?_sort=id&_order=desc&_limit=10",
        method: "GET",
      }),
    }),
    getAllBooks: builder.query({
      query: ({ search, genre, year }) => {
        let queryString = "";
        if (search) {
          queryString += `q=${search}`;
        }
        if (genre) {
          queryString += `&genre=${genre}`;
        }
        if (year) {
          queryString += `&year=${year}`;
        }
        return {
          url: `/books?${queryString}`,
        };
      },
    }),
  }),
});

export const {
  useAddBooksMutation,
  useGetLatestBooksQuery,
  useGetAllBooksQuery,
} = bookApi;
