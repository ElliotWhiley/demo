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
		<div className="App">
			<header className="p-3 mb-3 border-bottom">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<a href="#" className="nav-link px-2 link-dark">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="nav-link px-2 link-dark">
									Jokes
								</a>
							</li>
							<li>
								<a href="#" className="nav-link px-2 link-dark">
									Pokemon
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
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
		</div>
	);
};

export default Jokes;
