import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, addAmount } from "./features/counter/counterSlice";
import { useFetchBooksQuery } from "./features/books/booksSlice";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { data = [], isFetching } = useFetchBooksQuery();

  const handleClick = () => dispatch(addAmount(5));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Number of books fetched: {data.length}</p>
        <ol>
          {data.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ol>
        <div>
          <button aria-label="Decrement count">-</button>
          <span>{count}</span>
          <button aria-label="Increment count" onClick={handleClick}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
