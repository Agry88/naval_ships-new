import datasReducer from "./datas";
import PostdataReducer from "./Postdata";
import SidebarProdReducer from "./SidebarProd";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    datas:datasReducer,
    Postdata:PostdataReducer,
    SidebarProd:SidebarProdReducer,
})

export default allReducers;