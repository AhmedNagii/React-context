import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { BookListContext } from '../contexts/bookListContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const {books,setBooks} = useContext(BookListContext)
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((b) => {
          return <li key={b.id} style={{ background: theme.ui }}>{b.title}</li>;

        })}
       
      </ul>
    </div>
  );
};

export default BookList;
