

const datas = (state = [], action) => {
    switch (action.type) {
        case "CallGetApi":
            const newData = action.data;
            console.log("newData is ",newData);
            return newData
        default:
            return state
    }
}
export default datas;