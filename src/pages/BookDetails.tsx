/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetReviewsQuery,
  useGetSingleBookQuery,
} from "../redux/features/bookApi/bookApi";
import { useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSingleBookQuery(id!);
  const { user } = useAppSelector((state) => state.auth);

  const { data: getReviews } = useGetReviewsQuery(id!);
  console.log(getReviews);

  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id!);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        navigate("/all-books");
      }
    });
  };

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
              <Link to={`/edit-book/${id}`}>
                <button className="btn">Edit</button>
              </Link>
              <button className="btn delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="book-reviews">
          <h3>Reviews</h3>
          <div className="reviews-wrap">
            {getReviews?.map((review: any) => (
              <div className="review-item">
                <h5>{review?.comment}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
