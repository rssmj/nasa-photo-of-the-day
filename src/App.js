import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutContainer from "./components/LayoutContainer";
import "./App.css";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://api.nasa.gov/planetary/apod?api_key=HejLtGTOxFiYkyAhfVeD08a7mGdzqzpxatDFv51U")
			.then(response => {
				console.log(response);
				setData(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	return (
		<div className="App">
			<h1>🚀 NASA Astronomy Picture of the Day 🚀</h1>
			<LayoutContainer data={data} />
		</div>
	);
}

export default App;
