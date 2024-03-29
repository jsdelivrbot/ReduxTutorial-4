import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li 
        key={book.title}
        onClick={() => this.state.selectBook(book)}
        className ="list-group-item">
        {book.title}
        </li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //Whatever get returns will show up as props inside booklist
  return{
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  //Whenever selectedBook is called result passes through reducers
  return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);