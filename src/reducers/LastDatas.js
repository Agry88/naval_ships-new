


const LastDatas = (state = [], action) => {
    switch (action.type) {
        case "SetLastDatas":
            const newData = action.data;
            return newData
        default:
            return state
    }
}
export default LastDatas;