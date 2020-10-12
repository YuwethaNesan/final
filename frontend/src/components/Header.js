import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/usersAction";
import Logo from "../yuthiesaariPNG-01.png"

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header className="wave nav">
        <Navbar id="wave" bg="lg" variant="lg" className='nav' expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand> <img className="logo" src={Logo} alt="Logo" /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             
              <Nav className="ml-auto">
               {!userInfo && (
                 <>
              <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fa fa-user"></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
              
                </>
               )}
                {userInfo && userInfo.token && !userInfo.isAdmin && (
                  <>
                  <LinkContainer to="/search/Sketches">
                  <Nav.Link>
                    {/* <i className="fa fa-shopping-cart"></i> */}
                    Fresh
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/search/Porfolio">
                  <Nav.Link>
                    {/* <i className="fa fa-shopping-cart"></i> */}
                    Previous
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fa fa-shopping-cart"></i>
                    
                  </Nav.Link>
                </LinkContainer>
                
                
                    <NavDropdown title={<i className="fa fa-user"></i>} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                        {userInfo.name}'s Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
             
                )}

                {userInfo && userInfo.isAdmin && (
                  <>
                    <NavDropdown title={`Admin`} id="adminmenu">
                    <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
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
