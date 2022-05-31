import datasReducer from "./datas";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    datas:datasReducer,
})

export default allReducers;