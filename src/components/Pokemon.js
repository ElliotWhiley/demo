import { gql, useQuery } from "@apollo/client";

const pokemonSpecies = gql`
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
`;

const Pokemon = () => {
	const { loading, error, data } = useQuery(pokemonSpecies);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.generations.map(({ name }) => (
		<button key={name}>{name}</button>
	));
};

export default Pokemon;
