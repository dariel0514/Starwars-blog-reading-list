import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  console.log(store.singlePlanet);
  return (
    <>
      {store.singlePlanet.uid ? (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  store.baseImgUrl +
                  "/planets/" +
                  store.singlePlanet.uid +
                  ".jpg"
                }
                className="img-fluidrounded-start"
                alt="..."
              />
            </div>

            <div className="col-md-8">
              <div
                className="card-body"
                style={{ marginTop: "550px", marginLeft: "-100px" }}
              >
                <h5 className="card-title">
                  {store.singlePlanet.properties.name}
                </h5>
                <p className="card-text">{store.singlePlanet.description}</p>
              </div>
            </div>
          </div>
          <div>Name: {store.singlePlanet.properties.name}</div>
          <div>Climate: {store.singlePlanet.properties.climate}</div>
          <div>Population: {store.singlePlanet.properties.population}</div>
          <div>
            Orbital Periot: {store.singlePlanet.properties.orbital_period}
          </div>
          <div>
            Rotation Periot: {store.singlePlanet.properties.rotation_period}
          </div>
          <div>Diameter: {store.singlePlanet.properties.diameter}</div>
        </div>
      ) : (
        <Link to="/">
          <p>click here to get back to home page</p>
        </Link>
      )}
    </>
  );
};
