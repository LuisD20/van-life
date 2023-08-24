import { Link, NavLink } from "react-router-dom";

const style = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/host" style={({ isActive }) => (isActive ? style : null)}>
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? style : null)}
        >
          About
        </NavLink>
        <NavLink to="/vans" style={({ isActive }) => (isActive ? style : null)}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
