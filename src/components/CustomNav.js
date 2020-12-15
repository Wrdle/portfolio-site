import React, { useState, useEffect, useRef } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './css/CustomNav.css'

const CustomNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let listener = useRef(null);
    const [scrollState, setScrollState] = useState(false)

    useEffect(() => {
        listener.current = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 85) {
                if (scrollState !== true) {
                    setScrollState(true)
                }
            } else {
                if (scrollState !== false) {
                    setScrollState(false)
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener.current)
        }
    }, [scrollState])

    return (
        <div>
            <Navbar className={`custom-nav ${scrollState ? 'not-transparent' : 'transparent'}`} dark expand="md">

                <Link className="custom-brand navbar-brand" to="/">mattdag<span className="underscore">_</span></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse className={`${scrollState ? 'not-transparent' : 'transparent'}`} isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/photography">Photography</Link>
                        </NavItem>
                    </Nav>
                    <NavLink className="social-icon" href="https://github.com/wrdle" rel="noopener noreferrer" target="_blank"><AiFillGithub /></NavLink>
                    <NavLink className="social-icon" href="https://www.linkedin.com/in/matt-dagostino/" rel="noopener noreferrer" target="_blank"><IoLogoLinkedin /></NavLink>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default CustomNav;