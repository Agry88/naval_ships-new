

const Postdata = (state = [], action) => {
    switch (action.type) {
        case "CallPostApi":
            const newData = action.data;
            console.log("newData is ",newData);
            return newData
        default:
            return state
    }
}
export default Postdata;