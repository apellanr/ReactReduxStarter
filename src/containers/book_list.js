// will render a list of books
// need to import react-redux in order to create connection between
// application state (redux) and component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// { bindActionCreators } is a function that makes sure action generated
// from action creator actually flows through reducers

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectbook is called, the result should be passed to all of our reducers
    // dispatch function helps action (info from selectbook) pass through reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectbook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);