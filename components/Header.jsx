import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";

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
        <NavLink to="host" style={({ isActive }) => (isActive ? style : null)}>
          Host
        </NavLink>
        <NavLink to="about" style={({ isActive }) => (isActive ? style : null)}>
          About
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? style : null)}>
          Vans
        </NavLink>
        <NavLink to="login" style={({ isActive }) => (isActive ? style : null)}>
          <img className="login-icon" src={imageUrl} />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
