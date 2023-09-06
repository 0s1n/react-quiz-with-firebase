import ProgressBar from "./ProgressBar";

export interface HUDProps {
	score: number;
	questionNumber: number;
}
export default function HUD({ score, questionNumber }: HUDProps) {
	return (
		<div id='hud'>
			<div className='hud-item'>
				<div>
					<p className='hud-prefix'>Question {questionNumber}/10</p>
					<ProgressBar max={10} current={questionNumber} />
				</div>
			</div>
			<div className='hud-item'>
				<div>
					<p className='hud-prefix'>Score</p>
					<h1 className='hud-main-text'>{score}</h1>
				</div>
			</div>
		</div>
	);
}
