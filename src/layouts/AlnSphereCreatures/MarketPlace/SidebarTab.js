import React from "react";
import { NavLink } from "react-router-dom";

const SidebarTab = ({ Icon, title, active, onClick, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-tab fs-16px weight-5 light-white pointer ${
          isActive ? "active" : ""
        }`
      }
      onPress={onClick}
    >
      {Icon} {title}
    </NavLink>
  );
};

export default SidebarTab;
