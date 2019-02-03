import {createStore, applyMiddleware} from "redux"
import RootReducer from "./Reducers/RootReducer";
const store = createStore(RootReducer)
export default store;