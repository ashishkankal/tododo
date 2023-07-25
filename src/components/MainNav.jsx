import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <ul className="flex">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="page1">Page 1</Link>
      </li>
      <li>
        <Link to="page2">Page 2</Link>
      </li>
      <li>
        <Link to="users">Users</Link>
      </li>
    </ul>
  );
};

export default MainNav;
