

const Postdata = (state = [], action) => {
    switch (action.type) {
        case "CallPostApi":
            const newData = action.data;
            return newData
        default:
            return state
    }
}
export default Postdata;