import { useState } from "react";
import getGitHubProfile from "../services/GitHubService";

const Form = (props) => {
	const [userName, setUserName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const gitHubProfile = await getGitHubProfile(userName);
		props.onSubmit(gitHubProfile);
		setUserName("");
		document.getElementById("username-input").focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={userName}
				onChange={(event) => setUserName(event.target.value)}
				placeholder="GitHub username"
				required
				id="username-input"
			/>
			<button>Add card</button>
		</form>
	);
};

export default Form;
