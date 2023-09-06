import { useEffect, useState } from "react";
import { useFirebase } from "./Firebase/FirebaseContext";
import { onValue } from "firebase/database";

export interface IFirebaseScores {
	[key: string]: {
		key: string;
		name: string;
		score: number;
	};
}

export interface IScores {
	key: string;
	name: string;
	score: number;
}

export default function HighScores() {
	const firebase = useFirebase();
	const [scores, setScores] = useState<IScores[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		onValue(
			firebase.scores(),
			(snapshot) => {
				const data = snapshot.val();
				const sortedScores = formatScoreData(data);
				setScores(sortedScores);
				setLoading(false);
			},
			{ onlyOnce: true }
		);
	}, [firebase]);

	const formatScoreData = (firebaseScores: IFirebaseScores) => {
		const scores = [];

		for (const key in firebaseScores) {
			const val = firebaseScores[key];
			val["key"] = key;
			scores.push(val);
		}

		return scores
			.sort((score1, score2) => score2.score - score1.score)
			.slice(0, 10);
	};

	return (
		<>
			{loading && <div id='loader'></div>}
			{!loading && (
				<>
					<h1>High Scores</h1>
					<div id='highScoresList'>
						{scores.map((record) => (
							<li key={record.key} className='high-score'>
								{record.name} - {record.score}
							</li>
						))}
					</div>
				</>
			)}
		</>
	);
}
