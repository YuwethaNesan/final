import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/usersAction";
import { Route } from "react-router-dom";
import SearchBox from "./Searchbox";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header>
        <Navbar className="navbar" bg="lg" variant="lg" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Yuthies Aari</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="ml-auto">
                
                {userInfo && userInfo.token ? (
                  <>
                  <Route
                   render={({ history }) => <SearchBox history={history} />}
                   />
                <LinkContainer to="/home">
                  <Nav.Link>
                    Products
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fa fa-shopping-cart"></i>Cart
                  </Nav.Link>
                </LinkContainer>
                    <NavDropdown className="dropdown" title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fa fa-user"></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}

                {userInfo && userInfo.isAdmin && (
                  <>
                    <NavDropdown className="dropdown" title={`Admin`} id="adminmenu">
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
