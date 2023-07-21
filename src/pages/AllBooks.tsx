/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookItem from "../components/BookItem/BookItem";
import { useGetAllBooksQuery } from "../redux/features/bookApi/bookApi";
import { IBook } from "../types/globalTypes";
import { useState } from "react";

const AllBooks = () => {
  const [search, setSearch] = useState("");
  const { data: books } = useGetAllBooksQuery({ search });

  return (
    <div>
      <div className="all-books">
        <div className="container">
          <div className="filter-wrap">
            <div className="search">
              <input
                type="text"
                placeholder="Search books...."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="book-wrapper">
            {books?.map((book: IBook) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
