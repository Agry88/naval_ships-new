

const Member = (state = [], action) => {
    switch (action.type) {
        case "SetMemberData":
            const newData = action.data;
            return newData
        default:
            return state
    }
}
export default Member;