/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/bookApi/bookApi";
import { useAppSelector } from "../redux/hooks";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSingleBookQuery(id!);
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);

  return (
    <div className="book-details">
      <div className="container">
        <div className="book-details-card">
          <img src={data?.image} alt="" />
          <h2>{data?.title}</h2>
          <p>{data?.author}</p>
          <p>{data?.genre}</p>
          <p>{data?.publicationDate}</p>
          {user?.email === data?.user && (
            <div className="edit-delete-btn">
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
