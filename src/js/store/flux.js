const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			vehiculos: [],
			masInfo: [],
			favoritos: [],
			background: "",
		},
		actions: {
			getPersonajes: function () {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ personajes: data.results })
					})
					.catch(err => console.error(err))
			},
			getPlanetas: function () {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then((data) => {
						console.log(data);
						setStore({ planetas: data.results })
					})
					.catch(err => console.error(err))
			},
			getVehiculos: function () {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ vehiculos: data.results })
					})
					.catch(err => console.error(err))
			},
			getMasInfo: function (categorias, uid) {
				fetch(`https://www.swapi.tech/api/${categorias}/${uid}`)
					.then(res => res.json())
					.then(data => {
						// console.log(data);
						setStore({ masInfo: data.result })
					})
					.catch(err => console.error(err))
			},
			addFav: function (name) {
				let listadeFav = getStore().favoritos;
				let nuevoFav = name
				let nuevaListaDeFav = listadeFav.concat(nuevoFav)
				setStore({ favoritos: nuevaListaDeFav })
			},
			removeFav: function (name) {
				let listadeFav = getStore().favoritos;
				let nuevaListaDeFav = listadeFav.filter((item) => name !== item)
				setStore({ favoritos: nuevaListaDeFav })
			},
			favoritos: function (name) {
				let favNames = getStore().favoritos
		
			   if (getStore().favoritos.length == 0) {
				getActions().addFav(name)
			   } else {
				if (favNames.includes(name)) {
					getActions().removeFav(name)
				} else {
					getActions().addFav(name)
				}
			   }
			   
			}

		}
	};
};

export default getState;
