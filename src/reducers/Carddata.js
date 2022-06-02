


const Carddata = (state = [], action) => {
    switch (action.type) {
        case "CallCardApi":
            const newData = action.data;
            return newData
        default:
            return state
    }
}
export default Carddata;