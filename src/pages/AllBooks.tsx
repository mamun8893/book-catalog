/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import BookItem from "../components/BookItem/BookItem";
import { useGetAllBooksQuery } from "../redux/features/bookApi/bookApi";
import { IBook } from "../types/globalTypes";
import { useState, useEffect } from "react";

const AllBooks = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const { data: books, refetch } = useGetAllBooksQuery({ search, genre, year });

  let content = null;
  if (books?.length === 0) {
    content = <h2>No Books Found</h2>;
  } else if (books?.length > 0) {
    content = books?.map((book: IBook) => (
      <BookItem key={book.id} book={book} />
    ));
  }

  useEffect(() => {
    refetch();
  }, []);

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
            <div className="filter">
              <select name="" id="" onChange={(e) => setGenre(e.target.value)}>
                <option>Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Novel">Novel</option>
                <option value="Narrative">Narrative</option>
                <option value="Science fiction">Science fiction</option>
                <option value="Genre fiction">Genre fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Non-fiction">Non-fiction</option>
                <option value="Romance novel">Romance novel</option>
                <option value="Thriller">Thriller</option>
              </select>
              <select name="" id="" onChange={(e) => setYear(e.target.value)}>
                <option>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
              <Link to="/create-book">
                <button>Add Book</button>
              </Link>
            </div>
          </div>
          <div className="book-wrapper">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
