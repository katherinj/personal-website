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
        <Link
          to="/"
          className="title-link"
          onClick={() => myFunction("Landing")}
        >
          <div className="title"> KJ. </div>
        </Link>
        <a className="menu-icon" onClick={() => myFunction("")}>
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>

      <div className="nav-links" id="nav-links">
        <Link
          to="/about"
          className={currentLink == "About" ? "active nav-link" : "nav-link"}
          onClick={() => myFunction("About")}
        >
          About Me
        </Link>
        <Link
          to="/portfolio"
          className={
            currentLink == "Portfolio" ? "active nav-link" : "nav-link"
          }
          onClick={() => myFunction("Portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
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
