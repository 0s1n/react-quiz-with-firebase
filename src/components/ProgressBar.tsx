export interface ProgressBarProps {
	max: number;
	current: number;
}
export default function ProgressBar({ max, current }: ProgressBarProps) {
	const width = (current / max) * 100;
	return (
		<div id='progressBar'>
			<div id='progressBarFull' style={{ width: `${width}%` }}></div>
		</div>
	);
}
