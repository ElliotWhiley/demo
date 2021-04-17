import "./App.css";
import axios from "axios";
import { useState } from "react";

const App = (props) => {
	const [joke, setJoke] = useState({});
	const [displayPunchline, setDisplayPunchline] = useState(false);

	const getRandomJoke = async () => {
		const response = await axios.get(
			"https://official-joke-api.appspot.com/jokes/random"
		);
		setJoke(response.data);
		setDisplayPunchline(false);
	};

	return (
		<div className="App">
			<header className="App-header">
				<button onClick={getRandomJoke}>Joke</button>
				<button onClick={() => setDisplayPunchline(true)}>
					Punchline
				</button>
				<div>{joke.setup}</div>
				{displayPunchline && <div>{joke.punchline}</div>}
			</header>
		</div>
	);
};

export default App;
