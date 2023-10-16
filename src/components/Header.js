import { useState } from "react";

import "../stylesheets/Header.css";

function Header(props) {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      openMenu();
    }
  };

  return (
    <header className="header-container">
      <div id="title">
        <h2>Little Lemon</h2>
      </div>
      <button
        id="button-open-menu"
        className={open === false ? "open-menu" : "open-menu animation"}
        onClick={openMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={open === true ? "nav visible" : "nav"}>
        <div id="nav-list">
          <a href="/#home" onClick={handleClick("home")}>
            Home
          </a>
          <a href="/#gallery" onClick={handleClick("gallery")}>
            Gallery
          </a>
          <a href="/#menu" onClick={handleClick("menu")}>
            Menu
          </a>
          <a href="/#booking" onClick={handleClick("booking")}>
            Book & Events
          </a>
          <a href="/#about" onClick={handleClick("about")}>
            About Us
          </a>
        </div>
      </div>
      <div id="info">
        <h3>
          Email: <a href="#">hello@gmail.com</a>
        </h3>
        <h3>
          Phone: <a href="#">305-123-4567</a>
        </h3>
      </div>
    </header>
  );
}

export default Header;
