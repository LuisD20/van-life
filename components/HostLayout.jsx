import { NavLink, Outlet } from "react-router-dom";

const style = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end style={({ isActive }) => (isActive ? style : null)}>
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? style : null)}
        >
          Income
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? style : null)}>
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? style : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
