import { gql, useQuery } from "@apollo/client";
import { useState, Fragment } from "react";

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

const PokemonList = (props) => {
	const POKEMON_BY_SPECIES_QUERY = gql`
		query pokemonBySpecies {
			pokemon_v2_pokemonformgeneration(
				where: { generation_id: { _eq: ${props.generation} } }
			) {
				id
				pokemon_v2_pokemonform {
					name
					id
					pokemon_v2_pokemonformgenerations {
						generation_id
					}
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(POKEMON_BY_SPECIES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.pokemon_v2_pokemonformgeneration
		.filter(
			(pokemon) =>
				pokemon.pokemon_v2_pokemonform
					.pokemon_v2_pokemonformgenerations[0].generation_id ===
				props.generation
		)
		.map(({ pokemon_v2_pokemonform }) => (
			<div key={pokemon_v2_pokemonform.id}>
				<p key={pokemon_v2_pokemonform.id}>
					Name: {pokemon_v2_pokemonform.name}
				</p>
			</div>
		));
};

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};
