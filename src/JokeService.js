import axios from "axios";

const getRandomJoke = async () => {
	const response = await axios.get(
		"https://official-joke-api.appspot.com/jokes/random"
	);
	return response.data;
};

export default getRandomJoke;
