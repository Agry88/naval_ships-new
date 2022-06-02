


const BottomData = (state = [], action) => {
    switch (action.type) {
        case "CallBottomDataApi":
            const newData = action.data;
            return newData
        default:
            return state
    }
}
export default BottomData;