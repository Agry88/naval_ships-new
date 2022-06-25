import datasReducer from "./datas";
import PostdataReducer from "./Postdata";
import SidebarProdReducer from "./SidebarProd";
import CarddataProdReducer from "./Carddata";
import BottomDataReducer from "./BottomData";
import MemberReducer from "./Member";
import LastDatasReducer from "./LastDatas";
import SidebarSureButtonReducer from "./SidebarSureButton";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    datas: datasReducer,
    Postdata: PostdataReducer,
    SidebarProd: SidebarProdReducer,
    Carddata: CarddataProdReducer,
    BottomData: BottomDataReducer,
    Member: MemberReducer,
    LastDatas: LastDatasReducer,
    SidebarSureButton: SidebarSureButtonReducer,
})

export default allReducers;