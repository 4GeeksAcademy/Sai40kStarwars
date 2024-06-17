import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions}= useContext(Context)

	

	return (
		<nav className="container navbar navbar-light bg-white mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://i.pinimg.com/originals/b4/b5/fd/b4b5fdf7bf06601ad4bd1cc6f73acff3.png" style={{ width: "75px", height: "75px" }} /></span>
			</Link>
			<div className="btn-group" role="group">
				<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				<strong>Favoritos {store.favoritos.length}</strong>
				</button>
				<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					{store.favoritos.map((item,index)=>(
					<li key={index} className="d-flex justify-content-between">
						{item}
						<button onClick={() => {
							actions.removeFav(item);}} 
							className="btn btn-danger p-0 text-white px-1">X</button>
					</li>))}
				</ul>
			</div>
		</nav>
	);
};
