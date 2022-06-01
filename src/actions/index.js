import { useDispatch } from "react-redux";
export const Apiurl = "https://script.google.com/macros/s/AKfycbyg_WhAwRZihsuqCEE9DXkvnnWIbOiN_eMrEYVMjzFoTbensBjXpO-xCQ3DORISKnUx/exec";
export const CallGetApi = () => {
    return (dispatch) => {
        fetch(Apiurl, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log("get data is ", data);
                dispatch({
                    type: 'CallGetApi',
                    data: data,
                })
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const CallPostApi = (Times,ProdID) => {
    const newApiurl = Apiurl + "?way=附屬零件" + Times;
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                console.log("Post datas is", datas);
                datas = datas.filter(data => data.系統代碼 == ProdID)
                const newdata = datas.map(data => ({
                    ...data,
                    UniID: (data.系統代碼).toString() + (data.零件代碼)
                }))
                dispatch({
                    type: 'CallPostApi',
                    data: newdata,
                })
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const setSidebarProd = (ProdID) => {
    return (dispatch) => {
        dispatch({
            type: "setSidebarProd",
            ProdID: ProdID,
        })
    }
}