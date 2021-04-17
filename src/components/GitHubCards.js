import React, { useState } from "react";
import Form from "./Form.js";
import CardList from "./CardList.js";

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
