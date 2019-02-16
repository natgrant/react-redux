export function selectBook(book) {
  // Select book is an action creator, needs to return an action
  // An object w. a type property
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
