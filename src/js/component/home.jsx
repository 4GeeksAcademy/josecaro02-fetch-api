import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const pokeApi = 'https://pokeapi.co/api/v2/pokemon';
	const todosApi = 'http://assets.breatheco.de/apis/fake/todos/user/josecaro02'
	const todosList = [
		{ label: "Make the bed", done: false },
		{ label: "Walk the dog", done: false },
		{ label: "Do the replits", done: true },
		{ label: "Feed the cat", done: true}
	  ]
	
	const [pokemons, setPokemons] = useState([]);
	useEffect(() => {
		//fetch(urlAPI).then(promesa).then(resultado).catch(mensaje de error)
		fetch(pokeApi).then(result => result.json()).then(data => {
			console.log(data.results)
			setPokemons(data.results)
		}
		).catch(err => err)
	}, []);

	// GET API Todos
	//fetch(todosApi).then(result => result.json()).then(data => console.log(data)).catch(err => err)

	//POST API Todos
	/* 	fetch(todosApi, {
			method: 'POST',
			body: JSON.stringify([]),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => response.json()).then(data => console.log(data)).catch(err => err)
	 */
	//PUT API Todos
	/* let todos = [
		{ label: "Make the bed", done: false },
		{ label: "Walk the dog", done: false },
		{ label: "Do the replits", done: false }
	]
	let options = {
		method: 'PUT',
		body: JSON.stringify(todos),
		headers: {
			'Content-Type': 'application/json'
		}
	}
	fetch(todosApi, options).then(response => response.json()).then(data => console.log(data)).catch(err => err) */

	let options = {
		method: 'DELETE',
	}
	fetch(todosApi, options).then(response => response.json()).then(data => console.log(data)).catch(err => err)
	return (
		<div className="text-center">
			{
				pokemons.map((value, index) => {
					return <h3 key={index}>{value.name}</h3>
				})
			}
		</div>
	);
};

export default Home;
