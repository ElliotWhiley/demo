import { range } from "../utils";

const StarsDisplay = (props) => {
	return (
		<>
			{range(1, props.count).map((starId) => (
				<div key={starId} className="star" />
			))}
		</>
	);
};

export default StarsDisplay;
