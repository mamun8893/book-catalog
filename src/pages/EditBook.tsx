/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/bookApi/bookApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toastError, toastSuccess } from "../utils/helper";
import { useAppSelector } from "../redux/hooks";

type Inputs = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  id?: number;
  image: string;
};

const EditBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const { user } = useAppSelector((state) => state.auth);
  const { id } = useParams<{ id: string }>();

  const { data, isSuccess } = useGetSingleBookQuery(id!);
  const [updateBook, { isSuccess: updateSuccess, isError, error }] =
    useUpdateBookMutation();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { title, author, genre, publicationDate, image } = data;
    const year = publicationDate.split("-")[0];
    updateBook({
      id: id!,
      data: {
        title,
        author,
        genre,
        publicationDate,
        image,
        user: user?.email,
        year,
      },
    });
  };

  useEffect(() => {
    if (updateSuccess) {
      reset();
      toastSuccess("Book Update Successfully");
    } else if (isError) {
      toastError("Something went wrong");
    }
  }, [updateSuccess, isError, error]);

  useEffect(() => {
    setValue("title", data?.title);
    setValue("author", data?.author);
    setValue("genre", data?.genre);
    setValue("image", data?.image);
    setValue("publicationDate", data?.publicationDate);
  }, [isSuccess]);
  return (
    <div className="create-book">
      <div className="auth-wrap">
        <h3>Edit Book</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              {...register("title", { required: true })}
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author"
              {...register("author", { required: true })}
            />
            {errors.author && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label>Genre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Genre"
              {...register("genre", { required: true })}
            />
            {errors.genre && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image url"
              {...register("image", { required: true })}
            />
            {errors.image && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label>Publication Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter date"
              {...register("publicationDate", { required: true })}
            />
            {errors.publicationDate && <span>This field is required</span>}
          </div>
          <button type="submit">Create Book</button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
