import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
				<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorite
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((favorite, index) => {
						return(
							<li key={index}>
								<p className="dropdown-item">{favorite.name}</p>
								<button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
							</li>
						)
					})}
				</ul>
				</div>
				</div>
			</div>
		</nav>
	);
};