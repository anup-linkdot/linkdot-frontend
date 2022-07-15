import { useState } from "react";
import MenuItem from "./MenuItem";

const SideBar = () => {
  const navLinks = [
    { name: "Dashboard", url: "/dashboard/nobadge", path: "/dashboard/" },
    { name: "Badge Insight", url: "/insights", path: "/insights" },
  ];
  const currentPath = window.location.pathname;

  return (
    <>
      {navLinks.map(({ name, url, path }) => (
        <MenuItem
          key={name}
          name={name}
          active={currentPath === path}
          url={url}
        />
      ))}
    </>
  );
};

export default SideBar;
