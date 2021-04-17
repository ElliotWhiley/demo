import { useState, useEffect } from "react";
import "../styles/StarMatch.css";
import { sumArray, randomSumIn, range, randomNumber } from "../utils";

const StarMatch = () => {
	const [gameId, setGameId] = useState(1);

	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

// Custom hook - stateful function
const useGameState = () => {
	const [numberOfStars, setNumberOfStars] = useState(randomNumber(1, 9));
	const [candidateNumbers, setCandidateNumbers] = useState([]);
	const [availableNumbers, setAvailableNumbers] = useState(range(1, 9));
	const [secondsLeft, setSecondsLeft] = useState(10);

	useEffect(() => {
		if (secondsLeft > 0 && availableNumbers.length > 0) {
			const timerId = setTimeout(
				() => setSecondsLeft(secondsLeft - 1),
				1000
			);
			return () => clearTimeout(timerId);
		}
	});

	const setGameState = (newCandidateNumbers) => {
		if (sumArray(newCandidateNumbers) !== numberOfStars) {
			setCandidateNumbers(newCandidateNumbers);
		} else {
			const newAvailableNumbers = availableNumbers.filter(
				(x) => !newCandidateNumbers.includes(x)
			);
			setNumberOfStars(randomSumIn(newAvailableNumbers, 9));
			setAvailableNumbers(newAvailableNumbers);
			setCandidateNumbers([]);
		}
	};

	return {
		numberOfStars,
		availableNumbers,
		candidateNumbers,
		secondsLeft,
		setGameState,
	};
};

const Game = (props) => {
	const {
		numberOfStars,
		availableNumbers,
		candidateNumbers,
		secondsLeft,
		setGameState,
	} = useGameState();

	const candidatesAreWrong = sumArray(candidateNumbers) > numberOfStars;
	const gameStatus =
		availableNumbers.length === 0
			? "won"
			: secondsLeft === 0
			? "lost"
			: "active";

	const numberStatus = (number) => {
		if (!availableNumbers.includes(number)) {
			return "used";
		}
		if (candidateNumbers.includes(number)) {
			return candidatesAreWrong ? "wrong" : "candidate";
		}
		return "available";
	};

	const onNumberClick = (numberClicked, currentStatus) => {
		if (currentStatus === "used" || gameStatus !== "active") {
			return;
		}

		const newCandidateNumbers =
			currentStatus === "available"
				? [...candidateNumbers, numberClicked]
				: candidateNumbers.filter((x) => x !== numberClicked);

		setGameState(newCandidateNumbers);
	};

	return (
		<div className="game">
			<div className="help">
				Pick 1 or more numbers that sum to the number of stars
			</div>
			<div className="body">
				<div className="left">
					{gameStatus !== "active" ? (
						<PlayAgain
							onClick={props.startNewGame}
							gameStatus={gameStatus}
						/>
					) : (
						<StarsDisplay count={numberOfStars} />
					)}
				</div>
				<div className="right">
					{range(1, 9).map((number) => (
						<GridNumber
							key={number}
							number={number}
							status={numberStatus(number)}
							onClick={onNumberClick}
						/>
					))}
				</div>
			</div>
			<div className="timer">Time Remaining: {secondsLeft}</div>
		</div>
	);
};

const StarsDisplay = (props) => {
	return (
		<>
			{range(1, props.count).map((starId) => (
				<div key={starId} className="star" />
			))}
		</>
	);
};

const PlayAgain = (props) => {
	return (
		<div className="game-done">
			<div
				className="message"
				style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
			>
				{props.gameStatus == "lost" ? "Game over :(" : "Nice!"}
			</div>
			<button onClick={props.onClick}>Play Again</button>
		</div>
	);
};

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

// Color Theme
const colors = {
	available: "lightgray",
	used: "lightgreen",
	wrong: "lightcoral",
	candidate: "deepskyblue",
};

export default StarMatch;
