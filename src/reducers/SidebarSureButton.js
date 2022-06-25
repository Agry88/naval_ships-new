


const SidebarSureButton = (state = false, action) => {
    switch (action.type) {
        case "setSidebarSureButton":
            const status = action.status;
            return status
        default:
            return state
    }
}
export default SidebarSureButton;