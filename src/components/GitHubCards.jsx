import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";

const GitHubCards = () => {
	const [profiles, setProfiles] = useState([]);

	return (
		<React.Fragment>
			<Form onSubmit={(profile) => setProfiles([...profiles, profile])} />
			<CardList profiles={profiles} />
		</React.Fragment>
	);
};

export default GitHubCards;
