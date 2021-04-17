import axios from "axios";

const getGitHubProfile = async (userName) => {
	try {
		const { data } = await axios.get(
			`https://api.github.com/users/${userName}`
		);
		return data;
	} catch (exception) {
		console.log("Error retrieving GitHub profile", exception);
		throw exception;
	}
};

export default getGitHubProfile;
