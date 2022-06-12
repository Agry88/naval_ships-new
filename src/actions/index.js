import { useDispatch } from "react-redux";
export const Apiurl = "https://script.google.com/macros/s/AKfycbzxcBJZX6r-MI24CQ0fsjva2lCrlpdqYs69ORYKTP6yJb7WlhnCfBp2oQ3vx_EVXA/exec";
export const Memberapi = "https://script.google.com/macros/s/AKfycbwMvT4ts1oMHMxihS8hhjm8hEuCbd8Evj7g-SkUIEXDXr_KF6j_ZEmfQKnAzp3yLer1/exec";
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

export const CallPostApi = (Times, ProdID) => {
    const newApiurl = Apiurl + "?way=附屬零件" + Times + "&add=false";
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

export const CallCardApi = (time) => {
    const newApiurl = Apiurl + "?way=附屬零件" + (Number(time) + 1) + "&add=false";
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                dispatch({
                    type: "CallCardApi",
                    data: datas,
                })
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const CallBottomDataApi = (ID) => {
    const newApiurl = Apiurl + "?way=廠商資料" + "&add=false";
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                datas = datas.filter(data => data.ID == ID);
                const newdata = datas[0];
                dispatch({
                    type: "CallBottomDataApi",
                    data: newdata,
                })
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const CallMemberApi = (Account, Password) => {
    const newApiurl = Memberapi + "?memberAccount=" + Account + "&memberPassword=" + Password;
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                if (datas.length != 0) {
                    dispatch({
                        type: "SetMemberData",
                        data: datas,
                    })
                }
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const SetMemberEmpty = () => {
    return (dispatch) => {
        dispatch({
            type: "SetMemberData",
            data: [],
        })
    }
}

export const SetLastDatas = (datas) => {
    return (dispatch) => {
        dispatch({
            type: "SetLastDatas",
            data: datas,
        })
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