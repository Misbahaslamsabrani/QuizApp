import { combineReducers } from "redux";
import SignInReducer from "./SignInReducer";
import QuizReducer from "./QuizReducer";
const RootReducer = combineReducers({
    signIn: SignInReducer,
    quiz: QuizReducer
})
export default RootReducer;