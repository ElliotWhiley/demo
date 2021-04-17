import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Jokes from "./Jokes";
import Pokemon from "./Pokemon";

const App = () => {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/jokes">Jokes</Link>
					</li>
					<li>
						<Link to="/pokemon">Pokemon</Link>
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
					<Route path="/pokemon">
						<Pokemon />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
