import React from "react";
import './comment-item.css'
import { useSelector } from 'react-redux'
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap'

const CommentItem = ({ comment }) => {
    var user = useSelector(state =>
        state.library.users.find((user) => user.id === comment.userId))

    return (
        <div className="comment-container">
            <div className="comment-avatar">
                <h3 className="comment-username" >{user.name}</h3>
                <div className="comment-data">{comment.date}</div>
            </div>
            <p className="comment-text">{comment.text}</p>
        </div>
    )
}

const AddComment = (props) => {
    var user = useSelector((state) => state.library.users.find((user) => user.id === state.library.isAuth))
    var today = new Date(Date.now()).toDateString();

    return (
        <div className="comment-container">
            <div className="comment-avatar">
                <h3 className="comment-username">{user.name}</h3>
                <div className="comment-data">{`${today}`}</div>
            </div>
            <form onSubmit={props.handleSubmit} className="comment-text">
                <Field value="" name="text" className="mb-3" component="textarea" placeholder='Add your comment' />
                <Button type="submit" variant="primary">Опубликовать</Button>
            </form>
        </div>
    )
}
export { CommentItem, AddComment }