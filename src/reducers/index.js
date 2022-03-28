
const initialState = {
    currentBook: {},
    books: [],
    loading: true,
    error: null,
    isAuth: null,
    users: [],
    comments: [],
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            const { books, users, comments } = action.payload
            return {
                ...state,
                books: books,
                users: users,
                comments: comments,
                loading: false,
                error: null,
            };
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'LOGIN_USER_REQUEST':
            const { userName, password } = action.payload
            const user = state.users.find((user) => {
                if (user.name === userName && user.password === password)
                    return true
            })
            return {
                ...state,
                isAuth: user ? user.id : null,
                error: user ? null : "Пользователь не найден"
            };
        case "LOGOUT_USER_REQUEST":
            return {
                ...state,
                isAuth: null,
            };

        case "ADD_COMMENT_USER_REQUEST":
            let { values: { text }, bookId, isUserLoggedIn, date, id } = action.payload
            const newComment = {
                id: id,
                date: date,
                text: text,
                bookId: bookId,
                userId: isUserLoggedIn
            }
            return {
                ...state,
                comments: [
                    ...state.comments, newComment
                ]
            };
        case "EDIT_BOOK_USER_REQUEST":
            const editedBook = action.payload
            const itemIndex = state.books.findIndex((book) => book.id === editedBook.id)

            return {
                ...state, currentBook: editedBook,
                books: [
                    ...state.books.slice(0, itemIndex),
                    editedBook,
                    ...state.books.slice(itemIndex + 1)
                ]
            };
        case "GET_BOOK_BY_PARAMS":
            const { genre, title, author } = action.payload
            const book = state.books.find(
                (book) => {
                    if (book.genre === genre && book.author === author && book.title === title)
                        return true
                })

            return {
                ...state,
                currentBook: book
            }
        case "USER_BOOK_VOTE":
            const mark = action.payload
            const idx = state.books.findIndex((book) => book.id === state.currentBook.id)
            const newItem = {
                id: state.currentBook.id,
                title: state.currentBook.title,
                createdBy: state.currentBook.createdBy,
                author: state.currentBook.author,
                genre: state.currentBook.genre,
                year: state.currentBook.year,
                annotation: state.currentBook.annotation,
                rating: [...state.currentBook.rating, { userId: state.isAuth, mark: mark }],
                image: state.currentBook.image
            }

            return {
                ...state,
                books: [
                    ...state.books.slice(0, idx),
                    newItem,
                    ...state.books.slice(idx + 1)
                ], currentBook: newItem
            }



        default:
            return state;
    }
};

export { booksReducer };