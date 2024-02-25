import React from "react";
import { RootState } from "../redux/storeRTK";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/library/librarySlice";

const Library = () => {
  const books = useSelector((state: RootState) => state.library.books);

  const dispatch = useDispatch();

  // const handleDelete = (index: number) => {
  //   dispatch(deleteBook(index));
  // };

  return (
    <div className="bookList" style={{marginLeft: "50px"}}>
      <h2 style={{textAlign: 'center' }}>Books in our library:</h2>
      <ul>
        {books.map((e, i) => (
          <li key={i}>
            <p>
              ISBN:
              {e.isbn}. "{e.title}" - {e.author}, {e.year}
              <button
                onClick={() => dispatch(deleteBook(i))}
                style={{ marginLeft: "20px" }}
              >
                X
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
