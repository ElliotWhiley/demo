import { gql, useQuery } from "@apollo/client";
import { useState, Fragment } from "react";
import PokemonList from "./PokemonList.js";
import Button from "./Button.js";

const POKEMON_GENERATIONS_QUERY = gql`
	query pokemonGenerations {
		generations: pokemon_v2_generation {
			pokemon_species: pokemon_v2_pokemonspecies_aggregate {
				aggregate {
					count
				}
			}
			id
		}
	}
`;

const Pokemon = () => {
	const { loading, error, data } = useQuery(POKEMON_GENERATIONS_QUERY);
	const [displayPokemon, setDisplayPokemon] = useState(false);
	const [generation, setGeneration] = useState();

	const displayPokemonGeneration = (generationId) => {
		setDisplayPokemon(true);
		setGeneration(generationId);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<Fragment>
			{data.generations.map(({ id }) => (
				<Button
					handleClick={() => displayPokemonGeneration(id)}
					key={id}
					text={`Generation ${id}`}
				></Button>
			))}
			{displayPokemon && (
				<PokemonList generation={generation}>hi</PokemonList>
			)}
		</Fragment>
	);
};

export default Pokemon;
