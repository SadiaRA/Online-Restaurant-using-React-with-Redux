import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
const Navigation = () => {
  return (
    <div>
      <Navbar color="danger" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">Online Restaurant</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};
export default Navigation;
