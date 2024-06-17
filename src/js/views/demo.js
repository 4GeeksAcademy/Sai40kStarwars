import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams()
	const direcProp = store.masInfo.properties
	const [div2 , setDiv2]= useState({
		name:"Birth Year",
		info: direcProp?.birth_year
	})
	const [div3 , setDiv3]= useState({
		name:"Gender",
		info:direcProp?.gender
	})
	const [div4 , setDiv4]= useState({
		name:"Height",
		info:direcProp?.height
	})
	const [div5 , setDiv5]= useState({
		name:"Skin Color",
		info:direcProp?.skin_color
	})
	const [div6 , setDiv6]= useState({
		name:"Eye Color",
		info:direcProp?.eye_color
	})


	function categorias() {
		if (params.categorias=="planets") {
			setDiv2({name: "Gravity" ,info: direcProp?.gravity})
			setDiv3({name: "Diamer" ,info: direcProp?.diamer})
			setDiv4({name: "Climate" ,info: direcProp?.climate})
			setDiv5({name: "Population" ,info: direcProp?.population})
			setDiv6({name: "Terrain" ,info: direcProp?.terrain})
		} else if (params.categorias=="vehicles"){
			setDiv2({name: "Model" ,info: direcProp?.model})
			setDiv3({name: "Vehicle Class" ,info: direcProp?.vehicle_class})
			setDiv4({name: "Passengers" ,info: direcProp?.passengers})
			setDiv5({name: "Length" ,info: direcProp?.length})
			setDiv6({name: "Consumables" ,info: direcProp?.consumables})
		} else {
		}
	}


	useEffect(() => {
		actions.getMasInfo(params.categorias, params.uid)
		categorias()
	})
	// console.log(store.masInfo);
	return (
		<div className="container ">
			{/* <h1>{direcProp?.height}</h1> */}
			<div className="ROW d-flex justify-content-between mb-5">
				<div>
					<img src={direcProp?.url} />
				</div>
				<div className="text-center">
					<h1>{direcProp?.name}</h1>
					<p>{store.masInfo.description}</p>
				</div>
			</div>
			<div className="ROW d-flex justify-content-between mb-5">
				<div>
					<h6>Name</h6>
					<p>{direcProp?.name}</p>
				</div>
				<div>
					<h6>{div2.name}</h6>
					<p>{div2.info}</p>
				</div>
				<div>
					<h6>{div3.name}</h6>
					<p>{div3.info}</p>
				</div>
				<div>
					<h6>{div4.name}</h6>
					<p>{div4.info}</p>
				</div>
				<div>
					<h6>{div5.name}</h6>
					<p>{div5.info}</p>
				</div>
				<div>
					<h6>{div6.name}</h6>
					<p>{div6.info}</p>
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
