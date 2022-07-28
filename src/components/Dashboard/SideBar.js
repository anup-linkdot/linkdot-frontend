import MenuItem from "./MenuItem";

const SideBar = () => {
  const currentPath = window.location.pathname;
  const navLinks = [
    // FIXME: Dashboard menu link currently pointing to `/dashboard/nobadge`, it should be `dashboard`
    {
      name: "Dashboard",
      url: "/dashboard",
      path: "/dashboard",
    },
    { name: "Badge Insight", url: "/insights", path: "/insights" },
  ];
  return (
    <>
      {navLinks.map(({ name, url, path }) => {
        return (
          <MenuItem
            key={name}
            name={name}
            active={currentPath === path}
            url={url}
          />
        );
      })}
    </>
  );
};

export default SideBar;
