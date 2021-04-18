import { gql, useQuery } from "@apollo/client";

const PokemonList = (props) => {
	const POKEMON_BY_SPECIES_QUERY = gql`
		query pokemonBySpecies {
			pokemon_v2_pokemonformgeneration(
				where: { generation_id: { _eq: ${props.generation} } }
			) {
				pokemon_v2_pokemonform {
					name
					id
					pokemon_v2_pokemonformgenerations {
						generation_id
					}
                    pokemon_v2_pokemon {
                        height
                        pokemon_v2_pokemonspecy {
                            pokemon_v2_pokemonhabitat {
                                name
                            }
                        }
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
				<ul>
					<li>Id: {pokemon_v2_pokemonform.id}</li>
					<li>Name: {pokemon_v2_pokemonform.name}</li>
					<li>
						Height:{" "}
						{pokemon_v2_pokemonform.pokemon_v2_pokemon.height}
					</li>
					<li>
						Habitat:{" "}
						{
							pokemon_v2_pokemonform.pokemon_v2_pokemon
								.pokemon_v2_pokemonspecy
								.pokemon_v2_pokemonhabitat.name
						}
					</li>
				</ul>
			</div>
		));
};

export default PokemonList;
