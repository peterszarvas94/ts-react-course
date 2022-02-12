import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
	people: {
		name: string;
		url: string;
		age: number;
		note?: string;
	}[];
}

function App() {
	const examples: IState["people"] = [
		{
			name: "Lebron James",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg",
			age: 36,
			note: "Allergic to staying on the same team",
		}
	];

	// {
	// 	name: "Kobe Bryant",
	// 	url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/1024px-Kobe_Bryant_2014.jpg",
	// 	age: 36,
	// },

	// eslint-disable-next-line
	const [people, setPeople] = useState<IState["people"]>(examples);

	return (
		<div className="App">
			<h1>People Invited to my Party</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople}/>
		</div>
	);
}

export default App;
