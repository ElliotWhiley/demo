import { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";

const GitHubCards = () => {
	const [profiles, setProfiles] = useState([]);

	return (
		<>
			<Form onSubmit={(profile) => setProfiles([...profiles, profile])} />
			<CardList profiles={profiles} />
		</>
	);
};

export default GitHubCards;
