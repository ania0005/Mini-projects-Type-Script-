import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/library/librarySlice";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO
    dispatch(addBook({ title, author, year }));
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="library">
      <h2 style={{ marginLeft: "20px", textAlign: 'center' }}>Create Book:</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Title:<br/>
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></label>
        <label>Author:<br/>
        <input
          type="text"
          placeholder="Enter author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        /></label>
        <label>Year:<br/>
        <input
          type="text"
          placeholder="Enter year..."
          value={year}
          onChange={(e) => setYear(e.target.value)}
        /></label>
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
