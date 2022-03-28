import React from "react";
import {Spinner} from 'react-bootstrap'
import './spinner.css'
const MySpinner = () => {
    return (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>)
}

export default MySpinner;