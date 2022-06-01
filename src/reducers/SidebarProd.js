


const SidebarProd = (state = "", action) => {
    switch (action.type) {
        case "setSidebarProd":
            const newProd = action.ProdID;
            console.log("newProd is ",newProd);
            return newProd
        default:
            return state
    }
}
export default SidebarProd;