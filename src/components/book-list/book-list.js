import React, { Component } from "react";
import './book-list.css';
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { fetchBooks } from '../../actions'
import { compose } from '../../utils'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Link } from "react-router-dom";
import MySpinner from "../spinner";
import ErrorIndicator from '../error-indicator'

const BookList = ({ books }) => {

    function coverFormatter(cell, row) {
        return (
            <img src={cell} className="cover" alt="cover" />
        );
    }
    function rowFormatter(cell, row) {
        const book = books.filter(book => book.id === row.id)
        const path = `/${book[0].genre}/${book[0].author}-${book[0].title}`
        return (
            <Link to={path}>
                {cell}
            </Link>
        );
    }
    const options = {
        custom: true,
        totalSize: books.length,
    };

    const averageRating = (cell, row, rowIndex, formatExtraData) => {
        var arr = Object.values(cell);
        var sum = (accumulator, obj) => accumulator + obj.mark;
        var avg = arr.reduce(sum, 0) / arr.length;
        return avg ? Math.round(avg) : 0;
    };

    const columns = [

        {
            dataField: 'id',
            text: 'N',
            headerStyle: (colum, colIndex) => {
                return { width: '5%', textAlign: 'center' };
            }
        },
        {
            dataField: 'title',
            formatter: rowFormatter,
            text: 'Название', sort: true,
            headerStyle: (colum, colIndex) => {
                return { width: '25%', textAlign: 'center' };
            },
            filter: textFilter(),

        },
        {
            dataField: 'author',
            text: 'Автор', sort: true,
            headerStyle: (colum, colIndex) => {
                return { width: '15%', textAlign: 'center' };
            }, filter: textFilter()
        },
        {
            dataField: 'annotation',
            text: 'Аннотация',
            classes: 'book-annotation',
            headerStyle: (colum, colIndex) => {
                return { width: '23%', textAlign: 'center' };
            }

        },
        {
            dataField: 'image',
            text: 'Обложка',
            formatter: coverFormatter,
            style:{ objectFit: "fill"},
            headerStyle: (colum, colIndex) => {
                return { width: '20%', textAlign: 'center' };
            }
        },
        {
            dataField: 'rating',
            text: 'Рейтинг',
            formatter: averageRating,
            sort: true,
            style:{fontSize: "3rem", textAlign: 'center'},
            headerStyle: (colum, colIndex) => {
                return { width: '12%', textAlign: 'center', overflow: 'hidden' };
            }
        }
    ];


    return (
        <PaginationProvider
            pagination={paginationFactory(options)}
        >
            {
                ({
                    paginationProps,
                    paginationTableProps
                }) => (
                    <div>
                        <PaginationTotalStandalone
                            {...paginationProps}
                        />
                        <PaginationListStandalone
                            {...paginationProps}
                        />

                        <BootstrapTable data={books} keyField='id'
                            {...paginationTableProps}
                            filter={filterFactory()}
                            filterPosition="top"
                            columns={columns} />
                    </div>
                )
            }
        </PaginationProvider>)
}

class BookListContainer extends Component {

    componentDidMount() {

        this.props.loading && this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <MySpinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} />
    }
}



const mapStateToProps = ({ library: { books, loading, error } }) => {
    return {
        books, loading, error
    }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),

    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);


