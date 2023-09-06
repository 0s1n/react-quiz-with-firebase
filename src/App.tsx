import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import HighScores from "./components/HighScores";

function App() {
	return (
		<Router basename=''>
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/game' element={<Game />} />
					<Route path='/highScores' element={<HighScores />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
