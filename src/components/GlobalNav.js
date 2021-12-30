import React from "react";
import { Link } from "react-router-dom";

function GlobalNav() {
  return (
    <div>

      <nav>
        <Link to="/">Acuille</Link> <Link to="apropos">apropos</Link>
      </nav>
    </div>
  );
}

export default GlobalNav;
