import { IBook } from "../../types/globalTypes";

interface IProps {
  book: IBook;
}
const BookItem = ({ book }: IProps) => {
  console.log(book);
  const { title, author, genre, image, publicationDate } = book;

  return (
    <div className="book-item">
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
    </div>
  );
};

export default BookItem;
