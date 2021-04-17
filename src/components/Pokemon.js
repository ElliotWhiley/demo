import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect, Fragment } from "react";

const pokemonClient = new ApolloClient({
	uri: "https://beta.pokeapi.co/graphql/v1beta",
	cache: new InMemoryCache(),
});

const Pokemon = () => {
	const [generations, setGenerations] = useState([]);

	useEffect(async () => {
		var { data } = await pokemonClient.query({
			query: gql`
				query pokemonSpecies {
					generations: pokemon_v2_generation {
						pokemon_species: pokemon_v2_pokemonspecies_aggregate {
							aggregate {
								count
							}
						}
						name
					}
				}
			`,
		});
		setGenerations(data.generations);
	}, []);

	return (
		<Fragment>
			{generations.length ? (
				<div>
					{generations.map((generation) => (
						<div>{generation.name}</div>
					))}
				</div>
			) : (
				<span>loading...</span>
			)}
		</Fragment>
	);
};

export default Pokemon;
