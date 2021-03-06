const GridNumber = (props) => {
	return (
		<button
			className="number"
			style={{ backgroundColor: colors[props.status] }}
			onClick={() => props.onClick(props.number, props.status)}
		>
			{props.number}
		</button>
	);
};

const colors = {
	available: "lightgray",
	used: "lightgreen",
	wrong: "lightcoral",
	candidate: "deepskyblue",
};

export default GridNumber;
