import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";

export const rootReducer = combineReducers({
    data: cardReducer
})