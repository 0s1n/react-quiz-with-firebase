import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref } from "firebase/database";

const config = {
	apiKey: import.meta.env.VITE_APP_API_KEY,
	authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
};

class Firebase {
	private db: Database;
	constructor() {
		const app = initializeApp(config);
		this.db = getDatabase(app);
	}
	scores = () => ref(this.db, "scores");
}

export default Firebase;
