import React from "react";
import { Outlet } from "react-router-dom";

const UsersPage = () => {
  return (
    <div>
      <h2>Users</h2>

      <ul>...</ul>

      <Outlet />
    </div>
  );
};

export default UsersPage;
