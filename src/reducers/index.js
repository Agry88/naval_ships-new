import datasReducer from "./datas";
import PostdataReducer from "./Postdata";
import SidebarProdReducer from "./SidebarProd";
import CarddataProdReducer from "./Carddata";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    datas:datasReducer,
    Postdata:PostdataReducer,
    SidebarProd:SidebarProdReducer,
    Carddata:CarddataProdReducer,
})

export default allReducers;