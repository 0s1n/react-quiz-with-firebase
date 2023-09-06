import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirebaseContext from "./components/Firebase/FirebaseContext.ts";
import Firebase from "./components/Firebase/Firebase.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<FirebaseContext.Provider value={new Firebase()}>
			<App />
		</FirebaseContext.Provider>
	</React.StrictMode>
);
