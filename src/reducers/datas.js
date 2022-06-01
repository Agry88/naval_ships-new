

const datas = (state = [], action) => {
    switch (action.type) {
        case "CallGetApi":
            const newData = action.data;
            return newData
        default:
            return state
    }
}
export default datas;