import BookList from "./components/BookList";
import Navbar from "./components/NavBar";
import ToggleTheme from "./components/ThemeToggle";
import BookListContextProvider from "./contexts/bookListContext";
import ThemeContextProvider from "./contexts/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookListContextProvider>
          <BookList />
        </BookListContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
