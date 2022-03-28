import React from "react"
import { Route, Routes } from 'react-router-dom'
import './app.css'
import { connect } from "react-redux"
import { withBookstoreService } from '../hoc'
import { HomePage, LoginPage, BookPage } from "../pages"
import Header from "../header"
import { compose } from "../../utils"
import { onUserAuth, onUserLogout} from '../../actions'

const App = ({ isAuth, error, onUserCheck, onUserLogout }) => {

   return (
        <main role="main" className="container">
            <Header isAuth={isAuth} onLogout={()=>onUserLogout} />
            <Routes >
                <Route path="/"
                    element={<HomePage isAuth={isAuth}/>}
                    exact
                />
                <Route path="/:genre/:author-:title"
                    element={<BookPage isAuth={isAuth}/>}
                />
                <Route path="/login"
                    element={
                        <LoginPage
                            isAuth={isAuth}
                            error={error}
                            onLogin={(e) => onUserCheck(e)}
                            />}
                />
            </Routes>

        </main>

    )

};

const mapStateToProps = ({ library: { isAuth, error } }) => {
    return { isAuth, error }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
       
        onUserLogout: () => dispatch(onUserLogout()),
        onUserCheck: (formData) => {
            dispatch(onUserAuth(formData.userName, formData.password))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withBookstoreService())(App);
