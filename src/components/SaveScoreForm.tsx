import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "./Firebase/FirebaseContext";
import Firebase from "./Firebase/Firebase";
import { push } from "firebase/database";

export interface SaveScoreFormProps {
	score: number;
	scoreSaved?: () => void;
}

export interface IRecord {
	name: string;
	score: number;
}

export default function SaveScoreForm({ score }: SaveScoreFormProps) {
	const [username, setUserName] = useState("");
	const firebase = useFirebase() as Firebase;

	const navigate = useNavigate();

	const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		const updatedUsername = e.target.value;
		setUserName(updatedUsername);
	};

	const saveHighScore = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const record = {
			name: username,
			score,
		};
		push(firebase.scores(), record), navigate("/");
	};

	return (
		<div className='container'>
			<h1>Score: {score}</h1>
			<form onSubmit={saveHighScore}>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='cool kid 123'
					value={username}
					onChange={onUsernameChange}
				/>
				<button type='submit' className='btn' disabled={!username}>
					Save
				</button>
			</form>
			<Link to='/' className='btn'>
				Go Home
			</Link>
		</div>
	);
}
