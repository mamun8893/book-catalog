/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    getSingleBook: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddBooksMutation,
  useGetLatestBooksQuery,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi;
