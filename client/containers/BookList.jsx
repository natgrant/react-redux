import React, { Component } from "react";
import { connect } from "react-redux";

// actions need to bind
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// Take applications state as an argument
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList!
  // This is the glue ties state to props
  // if app state changes this component BookList will auto re-render
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
  // Whenever selectbook is called the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

// Containers are components which can connect React & Redux (Smart component)
// BookList cares about when the list of books changes
// BookList needs a connection to redux
