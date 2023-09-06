import { createContext, useContext } from "react";
import Firebase from "./Firebase";

const FirebaseContext = createContext({} as Firebase);

export default FirebaseContext;
export const useFirebase = () => useContext(FirebaseContext);
