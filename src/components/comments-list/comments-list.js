import React from "react";
import './comments-list.css'
import { CommentItem, AddComment } from "../comment-item";
import { reduxForm,reset } from 'redux-form';
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { onUserAddComment } from '../../actions'
import { v4 as uuidv4 } from 'uuid';


const CommentsList = ({ comments, bookId, onAddComment }) => {

    var isUserLoggedIn = useSelector((state) => state.library.isAuth)
    var userName = useSelector((state) => state.library.users.find((user) => user.id === state.library.isAuth))
    
    let handleAddComment = (values) => {
        const date = new Date(Date.now()).toDateString();
        let data = {values, bookId,  isUserLoggedIn, date,id:uuidv4()}
        values.text != "" && onAddComment( data )
        
    }

    return (<ul className="comments">
        {comments && comments.map((comment) => {
            return (
                <li key={comment.id} >
                    <CommentItem comment={comment} />
                </li>
            )
        })}

        <li>
            {isUserLoggedIn &&
                <AddCommentReduxForm  userName={userName} onSubmit={handleAddComment} />}
        </li>
    </ul>

    )
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        onAddComment: (e) => {
        dispatch(onUserAddComment(e),
        dispatch(reset('comment')))}
}
}


const AddCommentReduxForm = reduxForm({ form: 'comment' })(AddComment)
export default 
    connect(null, mapDispatchToProps)(CommentsList);


