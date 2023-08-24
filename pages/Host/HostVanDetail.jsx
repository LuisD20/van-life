import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const style = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}/day</p>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? style : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? style : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? style : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}

export default HostVanDetail;
