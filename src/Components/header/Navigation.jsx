import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsNavOpen: false,
    };
  }
  navToggle = () => {
    this.setState({
      IsNavOpen: !this.state.IsNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar color="danger" dark expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.navToggle} />
            <NavbarBrand href="/">Online Restaurant</NavbarBrand>
            <Collapse isOpen={this.state.IsNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/about" className="nav-link ">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/menu" className="nav-link ">
                    Menu
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
