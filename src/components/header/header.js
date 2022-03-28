import React from "react";
import './header.css'
import { useSelector} from 'react-redux'
import {Navbar, Container, Button} from 'react-bootstrap'
const Header = ({isAuth, onLogout}) => {

  const loginData = useSelector(state =>
    state.library.users.find((user) => user.id === isAuth))

  const UserFrofile = () => {
    return (
      <div>
      {loginData.name}
      <Button style={{marginLeft: "20px"}} onClick={onLogout()} 
      variant="primary">Выйти</Button>    
    </div>
    )
  }
  
  return (
<Navbar>
  <Container>
    <Navbar.Brand href="/">Test GZ Library</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      {loginData ? <UserFrofile name={loginData.name}/> : 
      <a href='/login'>
        <Button variant="primary">Войти</Button>
      </a> 
      }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Header;
