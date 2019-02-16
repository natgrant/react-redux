import React from "react";

import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

const App = () => (
  <div className="app">
    <BookList />
    <BookDetail />
  </div>
);

export default App;
