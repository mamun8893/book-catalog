/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import { useGetLatestBooksQuery } from "../redux/features/bookApi/bookApi";
import { IBook } from "../types/globalTypes";
import BookItem from "../components/BookItem/BookItem";

const Home = () => {
  const { data: books } = useGetLatestBooksQuery(undefined);

  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: `url(/banner-bg.jpg)` }}
      >
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-left">
              <div className="content">
                <p>The Bookworm Editors'</p>
                <h2>
                  Featured Books of the <span>February</span>
                </h2>
                <Link to="/">See More</Link>
              </div>
            </div>
            <div className="banner-right">
              <img src="/banner-img.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="recent-book">
        <div className="container">
          <div className="section-title">
            <h2>Recent Books</h2>
          </div>
          <div className="book-wrapper">
            {books?.map((book: IBook) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
