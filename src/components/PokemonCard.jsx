const PokemonCard = (props) => {
	return (
		<div>
			<ul>
				<li>Id: {props.id}</li>
				<li>Name: {props.name}</li>
				<li>Height: {props.height}</li>
				<li>Habitat: {props.habitat}</li>
			</ul>
		</div>
	);
};

export default PokemonCard;
