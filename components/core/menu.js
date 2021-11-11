//import Link from "next/link";

import menu from "./menu.module.css";

function Link({ to, children }) {
  return <>{children}</>;
}

export function Menu() {
  return (
    <nav>
      <ul className={menu.ul}>
        <li className={menu.li}>
          <Link to="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li className={menu.li}>
          <Link to="/books">
            <a>Libros</a>
          </Link>
        </li>
        <li className={menu.li}>
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
