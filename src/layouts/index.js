import React, { useState } from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/*Header*/}
      {menuOpen && <Menu />}
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        Toggle menu
      </button>

      {children}

      {/*Footer*/}
    </>
  );
};

export default Layout;

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/notes/The-Two-Year-Birthday">Test</Link>
      </li>
    </ul>
  );
};
