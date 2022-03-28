import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BookItem, BookEditForm } from '../book-item/book-item'
import CommentsList from '../comments-list/comments-list'
import { reduxForm } from "redux-form"
import { connect } from 'react-redux'
import { onUserEditBook, getBookByParams,onUserVoting } from '../../actions'
import { useNavigate } from "react-router-dom";

const BookPage = ({ isAuth, currentBook, books, getCurrentBook, setRating, comments, onUserEditBook }) => {
    const [bookEditMode, setBookEditMode] = useState(false);

    const { genre, author, title } = useParams();

    
        getCurrentBook({ genre, author, title })
  

   /*  const bookByParams = books.find(
        (book) => {
            if (book.genre === genre && book.author === author && book.title === title)
                return true
        }) */
    const commentsByBook = comments.filter((comment) => comment.bookId === currentBook.id)

    let navigate = useNavigate();    
     
    const handleRating = (mark) => {        
        setRating(mark)
    }

    const editBook = () => {
        setBookEditMode(true);
    }

    const handleEdit = (value) => {        
        onUserEditBook(value);
        navigate(`/${value.genre}/${value.author}-${value.title}`)
        setBookEditMode(false);
    }


    return (
        <>
            {bookEditMode ?
                <EditBookReduxForm initialValues={currentBook} onSubmit={handleEdit} book={currentBook} /> :
                <BookItem editBook={editBook} setRating={e => handleRating(e)} isAuth={isAuth} book={currentBook} />}
            <CommentsList bookId={currentBook.id} comments={commentsByBook} />
        </>
    )
}
const EditBookReduxForm = reduxForm({ form: 'editBook' })(BookEditForm)

const mapStateToProps = ({ library: { currentBook, books, comments } }) => {
    return {
        currentBook,
        books,
        comments
    }

}
const mapDispatchToProps = (dispatch) => {

    return {
        setRating: (e) => dispatch(onUserVoting(e)),
        getCurrentBook: (params) => { dispatch(getBookByParams(params)) },
        onUserEditBook: (e) => {
            dispatch(onUserEditBook(e))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookPage);