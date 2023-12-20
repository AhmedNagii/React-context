import {  createContext,useState } from "react";

export const BookListContext = createContext();

const BookListContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", id: 1 },
    { title: "the way of kings", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of ages", id: 4 },
  ]);
  return (
    <BookListContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
