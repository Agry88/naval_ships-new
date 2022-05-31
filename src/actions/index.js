import { useDispatch } from "react-redux";
const Apiurl = "https://script.google.com/macros/s/AKfycbyg_WhAwRZihsuqCEE9DXkvnnWIbOiN_eMrEYVMjzFoTbensBjXpO-xCQ3DORISKnUx/exec";
export const CallGetApi = () => {
    return (dispatch) => {
        fetch(Apiurl, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log("data is ", data);
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

export const CallPostApi = (Times) => {
    const newApiurl = Apiurl + "?way=附屬零件" + Times + 1;
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                datas = datas.filter(data => data.系統代碼 == this.state.propsID)
                const newdata = datas.map(data => ({
                    ...data,
                    UniID: (data.系統代碼).toString() + (data.零件代碼)
                }))
                console.log("newdata is ", newdata);
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