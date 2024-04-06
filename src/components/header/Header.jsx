import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setShow(scrollY > lastScrollY ? "hide" : "show");
    } else {
      setShow("top");
    }
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${show}`}>
      <nav className="nav container">
        <Link to="/" className="nav_logo">
          <img src={Logo} alt="vaibhav_kumar" className="logo" />
        </Link>

        <div className={`nav_menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav_list grid">
          <NavItem to="#home" icon="estate" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>Home</NavItem>
            <NavItem to="#about" icon="user" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>About</NavItem>
            <NavItem to="#skills" icon="arrow" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>Skills</NavItem>
            <NavItem to="#projects" icon="code-branch" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>Projects</NavItem>
            <NavItem to="#experience" icon="bag" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>Experience</NavItem>
            <NavItem to="#education" icon="bookmark" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>Education</NavItem>
            <NavItem to="#contact" icon="message" setActiveNav={setActiveNav} activeNav={activeNav} closeMenu={() => setToggle(false)}>Contact</NavItem>
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a
                href="https://bit.ly/vaibhavkumarCV"
                className="nav_link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-paperclip nav_icon"></i>
                Resume
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={() => setToggle(!toggle)}></i>

        </div>

        <div className="nav_toggle">
          <i className="uil uil-apps " onClick={() => setToggle(!toggle)}></i>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ to, icon, children, setActiveNav, activeNav, closeMenu }) => (
  <li className="nav_item" onClick={() => { setActiveNav(to); closeMenu(); }}>
    <a
      href={to} // Use href instead of to
      className={`nav_link ${activeNav === to ? "active-link" : ""}`}
    >
      <i className={`uil uil-${icon} nav_icon`}></i>
      {children}
    </a>
  </li>
);



export default Header;
