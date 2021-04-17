import axios from "axios";

const getRandomJoke = async () => {
	try {
		const response = await axios.get(
			"https://official-joke-api.appspot.com/jokes/random"
		);
		return response.data;
	} catch (exception) {
		console.log("Error retrieving GitHub profile", exception);
		throw exception;
	}
};

export default getRandomJoke;
