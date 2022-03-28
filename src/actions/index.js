
const booksLoaded =( {books, users, comments} )=> {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: {books, users, comments}
    };
};
const booksRequested = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    };
};
const booksError = (error) => {
    return {
        type: "FETCH_DATA_FAILURE",
        payload: error
    };
};
const fetchBooks = (bookstoreService, dispatch) => () => {
    
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data))
        ).catch((err) => dispatch(booksError(err)));
}

const onUserAuth = (userName, password) => {
    return {
        type: "LOGIN_USER_REQUEST",
        payload: { userName, password }
    }
}

const getBookByParams = ({genre, author, title}) => {
    return {
        type: "GET_BOOK_BY_PARAMS",
        payload: { genre, author, title }
    }
}
const onUserVoting = (mark) => {
    console.log(mark)
    return {
        type: "USER_BOOK_VOTE",
        payload: mark
    }
}

const onUserLogout = () => {
    return {
        type: "LOGOUT_USER_REQUEST"
    }
}
const onUserAddComment = (data) => {
    return {
        type: "ADD_COMMENT_USER_REQUEST",
        payload: data
    }
}
const onUserEditBook = (data) => {
    
    return {
        type: "EDIT_BOOK_USER_REQUEST",
        payload: data
    }
}

export {
    fetchBooks,    
    getBookByParams,
    onUserAuth, 
    onUserLogout, 
    onUserAddComment,
    onUserEditBook,
    onUserVoting

};