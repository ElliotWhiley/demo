import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const pokemonClient = new ApolloClient({
	uri: "https://beta.pokeapi.co/graphql/v1beta",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={pokemonClient}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
