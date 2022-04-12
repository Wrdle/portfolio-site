import { Navbar, Nav, Form } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

import NavStyles from "../static/styles/CustomNav.module.css";

const CustomNav = (props) => {
  return (
    <div>
      <Navbar
        className={NavStyles.CustomNav}
        variant="dark"
        bg="dark"
        expand="lg"
        sticky="top"
      >
        <Navbar.Brand className={NavStyles.CustomBrand} href="#home">
          mattdag<span className={NavStyles.underscore}>_</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbarnav" />
        <Navbar.Collapse className={NavStyles.NotTransparent}>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Photography</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link
              href="https://github.com/Wrdle"
              className={NavStyles.social_icon}
            >
              <AiFillGithub />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/matt-dagostino/"
              className={NavStyles.social_icon}
            >
              <IoLogoLinkedin />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
