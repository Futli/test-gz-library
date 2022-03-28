import React, {useState} from "react";
import { Button } from "react-bootstrap";
import './book-item.css'
import { Field } from 'redux-form';
import { Rating } from 'react-simple-star-rating'
import Form from 'react-bootstrap/Form'
const averageRating = (rating) => {
        var arr = Object.values(rating);
        var sum = (accumulator, obj) => accumulator + obj.mark;
        var avg = arr.reduce(sum, 0) / arr.length;
        return avg ? Math.round(avg) : 0;
    };

const BookItem = ({ book, isAuth, editBook, setRating }) => {

    let isAlreadyVote = book.rating.find(o => o.userId == isAuth)
    
    let avRating = book ? averageRating(book.rating) : 0
    
    
    const Vote = (props) => {      

        const handleRating = (rate) => { 
            setRating(rate * 0.05)

        }
        return (
          <div className='rating'>
            <Rating onClick={handleRating} readonly={props.readonly} initialValue={props.av} /* Available Props */ />
          </div>
        )
      }
    

    return (    
            <div className="book">
                <div className='book-cover'>
                    <img src={book.image} alt='cover' className="cover"/>
                    <div className="book-details">
                        <div>Год: {book.year} </div> 
                        <div>Жанр: {book.genre} </div> 
                        <div>
                        {!isAlreadyVote ? <Vote /> :<Vote readonly="true" av={avRating}/>}                        
                        </div> 

                    </div>
                </div>

                <div className='book-info'>
                    <h1>{book.title}</h1>
                    <h3>Автор: {book.author}</h3>
                    <p className="annotation">
                        {book.annotation}
                    </p>
                    {isAuth == book.createdBy && <Button onClick={editBook}>Редактировать</Button>}
            </div>
        </div>
    )
}

const BookEditForm = ({handleSubmit, book}) => {
    let avRating = book ? averageRating(book.rating) : 0

    
    return(
    <form onSubmit={handleSubmit}  className="book">
                <div className='book-cover'>
                    <img src={book.image} alt='cover' className="cover"/>
                    <Field name="image" className="m-3" component="input" placeholder="Вставьте URL новой обложки" />
                    <div className="book-details">
                    Год:<br/> <Field name="year" className="mb-3" component="input" placeholder={book.year} />
                    <br /> Жанр:<br /> <Field placeholder={book.genre} name="genre" className="mb-3" component="input"  />  <br />
                     Оценка: {avRating}
                    </div>
                </div>

                <div className='book-info'>
                Название: <Field placeholder={book.title} name="title" className="mb-3" component="input"  />
                Автор: <Field placeholder={book.author} name="author" className="mb-3" component="input"  />
                Аннотация: <Field placeholder={book.annotation} name="annotation" className="annotation" component="textarea"  />
                    
                    <Button className="mt-3" type="submit">Сохранить</Button>
            </div>
        </form>)
}

export {BookItem, BookEditForm}