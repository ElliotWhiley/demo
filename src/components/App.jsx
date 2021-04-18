import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Jokes from "./Jokes";
import GitHubCards from "./GitHubCards";
import StarMatch from "./StarMatch";
import Pokemon from "./Pokemon";

const App = () => {
	return (
		<header className="p-3 mb-3 App">
			<div className="container">
				<Router>
					<div className="flex-wrap align-items-center justify-content-center justify-content-lg-center">
						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<Link
									className="nav-link px-2 link-dark"
									to="/"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="nav-link px-2 link-dark"
									to="/jokes"
								>
									Jokes
								</Link>
							</li>
							<li>
								<Link
									className="nav-link px-2 link-dark"
									to="/github-cards"
								>
									GitHub Cards
								</Link>
							</li>
							<li>
								<Link
									className="nav-link px-2 link-dark"
									to="/star-match"
								>
									Star Match
								</Link>
							</li>
							<li>
								<Link
									className="nav-link px-2 link-dark"
									to="/pokemon"
								>
									Pokemon
								</Link>
							</li>
						</ul>

						<hr />

						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/jokes">
								<Jokes />
							</Route>
							<Route path="/github-cards">
								<GitHubCards />
							</Route>
							<Route path="/star-match">
								<StarMatch />
							</Route>
							<Route path="/pokemon">
								<Pokemon />
							</Route>
						</Switch>
					</div>
				</Router>
			</div>
		</header>
	);
};

export default App;
