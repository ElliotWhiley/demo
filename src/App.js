import "./App.css";
import { useState } from "react";
import getRandomJoke from "./JokeService";

const App = (props) => {
	const [joke, setJoke] = useState({});
	const [displayPunchline, setDisplayPunchline] = useState(false);

	const displayJoke = async () => {
		const joke = await getRandomJoke();
		setJoke(joke);
		setDisplayPunchline(false);
	};

	return (
		<div className="App">
			<header className="App-header">
				<button onClick={displayJoke}>Joke</button>
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
