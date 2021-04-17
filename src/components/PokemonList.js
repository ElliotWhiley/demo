import { gql, useQuery } from "@apollo/client";

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

export default PokemonList;
