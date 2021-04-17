import { useState } from "react";
import getRandomJoke from "../JokeService";

const Jokes = () => {
	const [joke, setJoke] = useState({});
	const [displayPunchline, setDisplayPunchline] = useState(false);
	const [displayPunchlineButton, setDisplayPunchlineButton] = useState(false);
	const displayJoke = async () => {
		const joke = await getRandomJoke();
		setJoke(joke);
		setDisplayPunchline(false);
		setDisplayPunchlineButton(true);
	};

	return (
		<div>
			<button onClick={displayJoke}>Joke</button>
			{displayPunchlineButton && (
				<button onClick={() => setDisplayPunchline(true)}>
					Punchline
				</button>
			)}
			<div>{joke.setup}</div>
			{displayPunchline && <div>{joke.punchline}</div>}
		</div>
	);
};

export default Jokes;
