import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
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
  return (
    <main>
      <header className="header">
        <Link to="/">על הפודקאסט</Link>
        <Link to="/feed?limit=5">פרקים</Link>
        <Link to="/idea">יש לי בובה של רעיון!</Link>
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
