import axios from "axios";

const getGitHubProfile = async (userName) => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${userName}`
		);
		return response.data;
	} catch (exception) {
		console.log("Error retrieving GitHub profile", exception);
		throw exception;
	}
};

export default getGitHubProfile;
