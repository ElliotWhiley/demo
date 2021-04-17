import "./App.css";
import axios from "axios";
import { useState } from "react";

const App = (props) => {
	const [joke, setJoke] = useState({});

	const getRandomJoke = async () => {
		const response = await axios.get(
			"https://official-joke-api.appspot.com/jokes/random"
		);
		setJoke(response.data);
	};

	return (
		<div className="App">
			<header className="App-header">
				<button onClick={getRandomJoke}>Joke</button>
				<div>{joke.setup}</div>
				<div>{joke.punchline}</div>
			</header>
		</div>
	);
};

export default App;
