import { Container, Navbar, Nav, Form } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

import NavStyles from "../static/styles/CustomNav.module.css";

const CustomNav = () => {
  return (
    <div>
      <Navbar
        className={NavStyles.CustomNav}
        variant="dark"
        bg="dark"
        expand="lg"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand className={NavStyles.CustomBrand} href="#home">
            mattdag<span className={NavStyles.underscore}>_</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbarnav" />
          <Navbar.Collapse className={NavStyles.NotTransparent}>
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Photography</Nav.Link>
            </Nav>
            <Form inline className="d-flex">
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
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNav;
