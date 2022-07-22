import type { LinksFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";
import styles from "~/styles/main.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "/logo.webp",
      as: "image",
      type: "image/webp",
    },
    { rel: "stylesheet", href: styles },
  ];
};
export default function Index() {
  const activeStyle = {
    textDecoration: "underline double",
  };
  return (
    <div id="main">
      <header className="header">
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
          על הפודקאסט
        </NavLink>
        <NavLink
          to="/feed"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          פרקים
        </NavLink>
        <NavLink
          to="/idea"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          יש לי בובה של רעיון!
        </NavLink>
        <NavLink
          to="/map"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          פרקים על המפה
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
