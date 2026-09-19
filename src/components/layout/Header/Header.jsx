import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logoSTG from '../images/STG.png';

const links = [
  { label: "Inicio", to: "/" },
  { label: "Clases", to: "/clases" },
  { label: "Gimnasio", to: "/gimnasio" },
  // { label: "Horarios", to: "/horarios" },
  // { label: "Contacto", to: "/contacto" }
];

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span>STRONG</span>
          <b>CLUB CENTER</b>
          <img src={logoSTG} alt="Logo Strong Gym" className="header-logo-img" />
        </Link>

        <button
          className={`header__toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "header__link active" : "header__link"
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="https://wa.link/lmsssu"
            className="button button--primary header__cta"
            onClick={closeMenu}
          >
            CONTACTO
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
