import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = function () {
	const { store, actions } = useContext(Context)
	// const [card, setCard] = useState([])


	useEffect(() => {
		actions.getPersonajes()
		actions.getPlanetas()
		actions.getVehiculos()
		
	}, [])

	return (
	<div className="text-center mt-2">
		<div className="container mb-4">
			<h3 className="d-flex flex-row">Personajes</h3>
			<div className="row visible-scrollbar d-flex" style={{flexWrap: "nowrap"}}>
			{store.personajes.map((item)=><Card key={item.uid} uid={item.uid} name={item.name} categoria="people"/>)}
			</div>
		</div>
		<div className="container mb-4">
			<h3 className="d-flex flex-row">Planetas</h3>
			<div className="row visible-scrollbar d-flex" style={{flexWrap: "nowrap"}}>
			{store.planetas.map((item)=><Card key={item.uid} uid={item.uid} name={item.name} categoria="planets"/>)}
			</div>
		</div>
		<div className="container mb-4">
			<h3 className="d-flex flex-row">Vehiculos</h3>
			<div className="row visible-scrollbar d-flex" style={{flexWrap: "nowrap"}}>
			{store.vehiculos.map((item)=><Card key={item.uid} uid={item.uid} name={item.name} categoria="vehicles"/>)}
			</div>
		</div>
	</div>
	)
};
