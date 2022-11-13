import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [currentLink, setCurrentLink] = useState("Home");
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction(link) {
    if (link != "") {
      setCurrentLink(link);
    }
    var x = document.getElementById("nav-links");
    console.log("Link:", link);
    if (x.className === "nav-links") {
      x.className += " responsive";
    } else {
      x.className = "nav-links";
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <Link to="/" className="title-link">
          <div className="title"> Katherin.io </div>
        </Link>
        <a className="menu-icon" onClick={() => myFunction("")}>
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>

      <div className="nav-links" id="nav-links">
        <Link
          to="/"
          className={currentLink == "About" ? "active nav-link" : "nav-link"}
          onClick={() => myFunction("About")}
        >
          About Me
        </Link>
        <Link
          to="/"
          className={
            currentLink == "Portfolio" ? "active nav-link" : "nav-link"
          }
          onClick={() => myFunction("Portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="/"
          className={currentLink == "Connect" ? "active nav-link" : "nav-link"}
          onClick={() => myFunction("Connect")}
        >
          Lets Connect!
        </Link>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <i className="fa-solid fa-xmarks-lines"></i>
      </Link>
    </div>
  );
}

export function NavLinks() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/">About us</Link>
      <Link to="/">Contact us</Link>
      <Link to="/">Catalog</Link>
    </div>
  );
}
