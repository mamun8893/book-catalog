/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link } from "react-router-dom";
import { IBook } from "../../types/globalTypes";

interface IProps {
  book: IBook;
}
const BookItem = ({ book }: IProps) => {
  const { id, title, author, genre, image, publicationDate } = book;

  return (
    <div className="book-item">
      <Link to={`/book-details/${id}`}>
        <div className="item-wrap">
          <div className="img">
            <img src={image} alt="book" />
          </div>
          <div className="content">
            <p className="genere">{genre}</p>
            <h4>{title}</h4>
            <p>{author}</p>
            <p>{publicationDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookItem;
