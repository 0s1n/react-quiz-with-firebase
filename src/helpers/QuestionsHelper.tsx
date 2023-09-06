export const loadQuestions = async (
	amount = 9,
	category = 9,
	difficulty = "easy",
	type = "multiple"
) => {
	const params = new URLSearchParams();
	params.set("amount", amount.toString());
	params.set("category", category.toString());
	params.set("difficulty", difficulty);
	params.set("type", type);
	const url = `https://opentdb.com/api.php?${params.toString()}`;

	try {
		const res = await fetch(url);
		if (res.ok) {
			const { results } = await res.json();
			return convertQuestionsFromAPI(results);
		} else {
			throw new Error("Failed to fetch questions");
		}
	} catch (err) {
		throw new Error("Failed to load questions");
	}
};

export interface RawQuestion {
	category: string;
	correct_answer: string;
	difficulty: string;
	type: string;
	incorrect_answers: string[];
	question: string;
}

export interface FormattedQuestion {
	question: string;
	answerChoices: string[];
	answer: number;
}

const convertQuestionsFromAPI = (rawQuestions: RawQuestion[]) => {
	return rawQuestions.map((loadedQuestion) => {
		const formattedQuestion: FormattedQuestion = {
			question: loadedQuestion.question,
			answerChoices: [...loadedQuestion.incorrect_answers],
			answer: Math.floor(Math.random() * 4),
		};
		formattedQuestion.answerChoices.splice(
			formattedQuestion.answer,
			0,
			loadedQuestion.correct_answer
		);
		return formattedQuestion;
	});
};
